import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { IMaskInput } from 'react-imask';
import { RootReducer } from '../../redux/store';
import { Button } from '../Button';
import * as S from './styles';
import { clear, close, remove } from '../../redux/slices/cart';
import { priceFormat } from '../MenuList';
import { usePurchaseMutation } from '../../services/api';

export function Cart() {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();
  const [purchase, { data, isSuccess, isLoading, isError }] =
    usePurchaseMutation();
  const [cart, setCart] = useState(true);
  const [deliveryData, setDeliveryData] = useState(false);
  const [paymentData, setPaymentData] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const navigate = useNavigate();

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      reference: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, 'O nome precisa ter mais de 3 caracteres')
        .required('Este campo é obrigatório'),
      address: Yup.string().required('Este campo é obrigatório'),
      city: Yup.string().required('Este campo é obrigatório'),
      cep: Yup.string().required('Este campo é obrigatório'),
      number: Yup.string()
        .matches(/^\d+$/, 'Digite apenas números')
        .required('Este campo é obrigatório.'),
      cardOwner: Yup.string()
        .min(3, 'o nome precisa ter mais de 3 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório'),
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco,
        })),
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.reference,
          },
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              year: Number(values.expiresYear),
              month: Number(values.expiresMonth),
            },
          },
        },
      });
    },
  });

  const closeCart = () => {
    dispatch(close());
  };

  function getTotalPrice() {
    return items.reduce((acum, actualValue) => {
      return (acum += actualValue.preco);
    }, 0);
  }

  function removeItem(uniqueId: string) {
    dispatch(remove(uniqueId));
  }

  function goToDelivery() {
    setCart(false);
    setPaymentData(false);
    setDeliveryData(true);
  }

  async function goToPayment() {
    const errors = await form.validateForm();

    if (
      !errors.fullName &&
      !errors.address &&
      !errors.city &&
      !errors.cep &&
      !errors.number
    ) {
      setPaymentData(true);
      setDeliveryData(false);
    } else {
      form.setTouched({
        fullName: true,
        address: true,
        city: true,
        cep: true,
        number: true,
      });
    }
  }

  function backToCart() {
    setCart(true);
    setPaymentData(false);
    setDeliveryData(false);
    setCheckout(false);
  }

  function goToCheckout() {
    if (
      !form.errors.cardOwner &&
      !form.errors.cardNumber &&
      !form.errors.cardCode &&
      !form.errors.expiresMonth &&
      !form.errors.expiresYear
    ) {
      setPaymentData(false);
      setCheckout(true);
    }
  }

  function successPayment() {
    dispatch(close());
    dispatch(clear());
    backToCart();
    form.resetForm();
    navigate('/');
  }

  function checkInputHasError(fieldName: string) {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    const hasError = isTouched && isInvalid;

    return hasError;
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay
        onClick={() => {
          if (cart) {
            closeCart();
          }
        }}
      ></S.Overlay>
      <S.Sidebar isVisible={cart}>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{priceFormat(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.uniqueId)} type="button" />
            </S.CartItem>
          ))}
        </ul>
        {items.length > 0 ? (
          <>
            <S.FinalPrice>
              <p>Valor total</p>
              <span>{priceFormat(getTotalPrice())}</span>
            </S.FinalPrice>
            <Button type="button" onClick={goToDelivery}>
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <p className="empty-cart">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra.
          </p>
        )}
      </S.Sidebar>

      <S.Sidebar isVisible={deliveryData}>
        <S.Form onSubmit={form.handleSubmit}>
          <S.Title>Entrega</S.Title>
          <S.InputGroup>
            <label htmlFor="fullName">Quem irá receber</label>
            <input
              id="fullName"
              type="text"
              value={form.values.fullName}
              onChange={form.handleChange}
              name="fullName"
              onBlur={form.handleBlur}
              className={checkInputHasError('fullName') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="address">Endereço</label>
            <input
              id="address"
              type="text"
              value={form.values.address}
              onChange={form.handleChange}
              name="address"
              onBlur={form.handleBlur}
              className={checkInputHasError('address') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              type="text"
              value={form.values.city}
              onChange={form.handleChange}
              name="city"
              onBlur={form.handleBlur}
              className={checkInputHasError('city') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGrouping>
            <S.InputGroup>
              <label htmlFor="cep">CEP</label>
              <IMaskInput
                mask="00000-000"
                id="cep"
                type="text"
                value={form.values.cep}
                onChange={form.handleChange}
                name="cep"
                onBlur={form.handleBlur}
                className={checkInputHasError('cep') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="number">Número</label>
              <input
                id="number"
                type="text"
                value={form.values.number}
                onChange={form.handleChange}
                name="number"
                onBlur={form.handleBlur}
                className={checkInputHasError('number') ? 'error' : ''}
              />
            </S.InputGroup>
          </S.InputGrouping>
          <S.InputGroup className="magin-bottom">
            <label htmlFor="reference">Complemento (opcional)</label>
            <input
              id="reference"
              type="text"
              value={form.values.reference}
              onChange={form.handleChange}
              name="reference"
              onBlur={form.handleBlur}
              className={checkInputHasError('reference') ? 'error' : ''}
            />
          </S.InputGroup>
          <Button type="button" onClick={goToPayment}>
            Continuar com o pagamento
          </Button>
          <Button type="button" onClick={backToCart}>
            Voltar para o carrinho
          </Button>
        </S.Form>
      </S.Sidebar>

      <S.Sidebar isVisible={paymentData}>
        <S.Form onSubmit={form.handleSubmit}>
          <S.Title>
            Pagamento - Valor a pagar {priceFormat(getTotalPrice())}
          </S.Title>
          <S.InputGroup>
            <label htmlFor="cardOwner">Nome no cartão</label>
            <input
              id="cardOwner"
              type="text"
              value={form.values.cardOwner}
              onChange={form.handleChange}
              name="cardOwner"
              onBlur={form.handleBlur}
              className={checkInputHasError('cardOwner') ? 'error' : ''}
            />
          </S.InputGroup>
          <S.InputGrouping>
            <S.InputGroup>
              <label htmlFor="cardNumber">Número do cartão</label>
              <IMaskInput
                mask="0000 0000 0000 0000"
                id="cardNumber"
                type="text"
                value={form.values.cardNumber}
                onChange={form.handleChange}
                name="cardNumber"
                onBlur={form.handleBlur}
                className={checkInputHasError('cardNumber') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup maxWidth="86px">
              <label htmlFor="cardCode">CVV</label>
              <IMaskInput
                mask="000"
                id="cardCode"
                type="text"
                value={form.values.cardCode}
                onChange={form.handleChange}
                name="cardCode"
                onBlur={form.handleBlur}
                className={checkInputHasError('cardCode') ? 'error' : ''}
              />
            </S.InputGroup>
          </S.InputGrouping>
          <S.InputGrouping>
            <S.InputGroup>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <IMaskInput
                mask="00"
                id="expiresMonth"
                type="text"
                value={form.values.expiresMonth}
                onAccept={(value: string) => {
                  const number = parseInt(value, 10);
                  if (number >= 1 && number <= 12) {
                    form.setFieldValue('expiresMonth', value);
                  } else {
                    form.setFieldValue('expiresMonth', '');
                  }
                }}
                name="expiresMonth"
                onBlur={form.handleBlur}
                className={checkInputHasError('expiresMonth') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <IMaskInput
                mask="00"
                id="expiresYear"
                type="text"
                value={form.values.expiresYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                name="expiresYear"
                className={checkInputHasError('expiresYear') ? 'error' : ''}
              />
            </S.InputGroup>
          </S.InputGrouping>
          <Button type="submit" onClick={goToCheckout} disabled={isLoading}>
            {isLoading ? 'Finalizando compra...' : 'Finalizar pagamento'}
          </Button>
          <Button type="button" onClick={goToDelivery}>
            Voltar para a edição de endereço
          </Button>
        </S.Form>
      </S.Sidebar>

      {isSuccess && data && checkout && (
        <S.Sidebar isVisible={checkout}>
          <S.Title>Pedido realizado - {data.orderId} </S.Title>
          <S.MessageContainer>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button type="button" onClick={successPayment}>
              Concluir
            </Button>
          </S.MessageContainer>
        </S.Sidebar>
      )}
      {isError && checkout && (
        <S.Sidebar isVisible={checkout}>
          <S.Title> Erro na transação</S.Title>
          <p>Verifique os dados do cartão</p>
          <Button type="button" onClick={backToCart}>
            Voltar para o carrinho
          </Button>
        </S.Sidebar>
      )}
    </S.CartContainer>
  );
}

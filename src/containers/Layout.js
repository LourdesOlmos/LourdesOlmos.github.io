import React from "react";
import {
  Button,
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { fetchCart } from "../store/actions/cart";
import logo from '../assets/img/logo.png';

class CustomLayout extends React.Component {
  componentDidMount() {
    this.props.fetchCart();
  }

  render() {
    const { authenticated, cart, loading } = this.props;
    return (
      <div>
        <Menu inverted>
          <Container>
            <Link to="/">
              <Menu.Item header>Pretii</Menu.Item>
            </Link>
            <Link to="/products">
              <Menu.Item header>Pasarela</Menu.Item>
            </Link>
            {authenticated ? (
              <React.Fragment>
                <Menu.Menu position="right">
                  <Link to="/profile" >
                    <Menu.Item>
                     <i className="user icon"></i>
                    </Menu.Item>
                  </Link>
                   <Link to="/" >
                    <Menu.Item>
                     <i className="heart outline icon"></i>
                    </Menu.Item>
                  </Link>
                  <Dropdown
                    icon="cart"
                    loading={loading}
                    text={`${cart !== null ? cart.order_items.length : 0}`}
                    pointing
                    className="link item"
                  >
                    <Dropdown.Menu>
                      {cart !== null ? (
                        <React.Fragment>
                          {cart.order_items.map(order_item => {
                            return (
                              <Dropdown.Item key={order_item.id}>
                                {order_item.quantity} x {order_item.item.title}
                              </Dropdown.Item>
                            );
                          })}
                          {cart.order_items.length < 1 ? (
                            <Dropdown.Item>No items in your cart</Dropdown.Item>
                          ) : null}
                          <Dropdown.Divider />
                          <Dropdown.Item
                            icon="arrow right"
                            text="Ir al carrito"
                            onClick={() =>
                              this.props.history.push("/order-summary")
                            }
                          />
                        </React.Fragment>
                      ) : (
                        <Dropdown.Item >Tu carrito esta vacío</Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Menu.Item header onClick={() => this.props.logout()}>
                    Salir
                  </Menu.Item>
                </Menu.Menu>
              </React.Fragment>
            ) : (
              <Menu.Menu position="right">
                <Link to="/login">
                  <Menu.Item header>Ingresar</Menu.Item>
                </Link>
                <Link to="/signup">
                  <Menu.Item header>Registrar</Menu.Item>
                </Link>
              </Menu.Menu>
            )}
          </Container>
        </Menu>

        {this.props.children}

        <Segment
          inverted
          vertical
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        >
          <Container textAlign="center">
            <Grid divided inverted stackable>
              <Grid.Column width={4}>
                <Header inverted as="h4" content="Acerca de nosotros" />
                <List link inverted>
                  <List.Item as="a">Quienes somos</List.Item>
                  <List.Item as="a">Únete al equipo</List.Item>
                  <List.Item as="a">Blog</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header inverted as="h4" content="Servicio al cliente" />
                <List link inverted>
                  <List.Item as="a">Contáctenos</List.Item>
                  <List.Item as="a">Forma de pago</List.Item>
                  <List.Item as="a">Información de envío</List.Item>
                  <List.Item as="a">Devoluciones</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header inverted as="h4" content="Encuéntrenos en:" />
                <p>
                <Button
                  color="black"
                  href="https://www.facebook.com/Pretii-105903184240294"
                  id="tooltip230450801"
                  target="_blank"
                >
                  <i className ="facebook icon" />
                </Button>
                </p>

              </Grid.Column>
            </Grid>

            <Divider inverted section />
            <Image centered size="mini" src={logo} alt='some value' />
            <List horizontal inverted divided link size="small">
              <List.Item as="a" href="#">
                Contáctenos
              </List.Item>
              <List.Item as="a" href="#">
                Términos y condiciones
              </List.Item>
              <List.Item as="a" href="#">
                Política de privacidad y cookies
              </List.Item>
               <List.Item as="a" href="#">
                Aviso de copyright
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null,
    cart: state.cart.shoppingCart,
    loading: state.cart.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchCart: () => dispatch(fetchCart())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);

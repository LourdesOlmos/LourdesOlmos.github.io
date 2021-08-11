import PropTypes from "prop-types";
import React, { Component } from "react";
import HomePageCarousel from "../Carousel/HomePageCarousel";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import home_1 from '../assets/img/home_1.jpg';
import home_2 from '../assets/img/home_2.jpg';

const getWidth = () => {
  const isSSR = typeof window === "undefined";
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        />
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        {children}
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = () => (

  <ResponsiveContainer>
    <div className ="ui inverted vertical masthead center aligned segment">
      <div className ="ui text container">
       <h1 className ="ui inverted header">
         Pretii
       </h1>
       <h2>Independencia financiera</h2>
       <h2>Libertad de acción</h2>
      <div className = "ui huge primary button">Contacto<i className="right arrow icon"></i></div>
    </div>

  </div>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Despega, crea tu propio camino
            </Header>


            <Header as="h3" style={{ fontSize: "2em" }}>
              Genera beneficios...
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Tu negocio necesita crecer, irrumpir en la web.
              Buscas el camino correcto y las herramientas perfectas.
              Nuestro software hace el trabajo difícil mientras
              tu creas.
            </p>
            <p style={{ fontSize: "1.33em" }}>
              Minimiza costos de operación.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
              <img
               size="large" src={home_1} alt='some value'
              />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge"  color= "pink">
              Comenzar mi Ecommerce
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Inteligencia artificial
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Pretii integra sistemas de recomendación para que tus clientes siempre encuentren
               lo que necesitan y aquéllo que aún no saben que desean.
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "2em", paddingTop: "2em" }}>
              <p style={{ fontSize: "1.33em" }}>
                 Tus clientes...
              </p>
            <Header as="h3" style={{ fontSize: "6em" }}>
             <img src={home_2} alt='some value' />
            </Header>
              <p style={{ fontSize: "1.33em" }}>
                ¡Siempre se sorprenderan!
              </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "8em 0em" }} vertical>

      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Monitorea y controla, fácilmente
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          No solo es tu propio ecommerce, tambien tu sistema de administración...
        </p>
        <Button as="a" size="large" color= "pink">
          Solicita un demo
        </Button>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#case-studies">Case Studies</a>

        </Divider>
        <div align='center'>
            <HomePageCarousel/>
        </div>

        <Header as="h3" style={{ fontSize: "2em" }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur
          filler content, but it's really true. It took years of gene splicing
          and combinatory DNA research, but our bananas can really dance.
        </p>
        <Button as="a" size="large">
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>
  </ResponsiveContainer>
);
export default HomepageLayout;

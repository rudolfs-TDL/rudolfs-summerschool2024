import Cart from '../pageElements/Cart'
import Checkout from '../pageElements/Checkout'
import Global from '../pageElements/Global'
import Home from '../pageElements/Home'
import Login from '../pageElements/Login'
import Product from '../pageElements/Product'
import Store from '../pageElements/Store'

class Pages {
    construtor() {
        this.Cart = new Cart()
        this.Checkout = new Checkout()
        this.Global = new Global()
        this.Home = new Home()
        this.Login = new Login()
        this.Product = new Product()
        this.Store = new Store()
    }
}

module.exports = Pages

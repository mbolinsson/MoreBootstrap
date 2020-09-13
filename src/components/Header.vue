<template>
  <!-- <router-link to="/">Home</router-link>|
  <router-link to="/about">About</router-link>-->
  <div>
    <div class="container-fluid bg-primary">
      <div class="nav container d-flex justify-content-between p-0">
        <ul class="nav nav-pills">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle pl-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">ENG</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">USD</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </li>
        </ul>
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Newsletter</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link pr-0" href="#">FAQs</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="container align-items-center d-flex justify-content-center mt-4 p-0 flex-wrap justify-content-lg-between">
      <div class="mt-2 mt-md-0 mb-4 mb-xl-0">
        <img src="/img/Header/KenKataLogo.svg" alt="KenKataLogo" />
      </div>

      <div class="d-flex align-items-center flex-wrap mt-2 mt-lg-0 justify-content-center justify-content-lg-between">
        <form id="form-custom" class="order-2 order-lg-1 form-inline my-2 my-lg-0 mr-md-2 flex-nowrap mt-3 mt-lg-0 ml-md-5 ml-lg-0">
          <input id="search-input-custom" class="form-control border-danger border-right-0" type="search" placeholder="Search products..." aria-label="Search" />
          <a
            id="search-dropdown-custom"
            class="nav-link dropdown-toggle border border-danger btn-sm rounded-0 m-0 text-dark"
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            >Categories</a
          >
          <button id="search-btn-custom" class="btn border-left-0 rounded-0 bg-primary border-primary" type="submit">
            <img src="/img/Header/Search-icon-header.png" alt="Search icon Header" />
          </button>
        </form>
        <div class="order-1 order-lg-2 mt-2 mt-md-0">
          <a class="ml-md-4 mr-3" href="#">
            <img src="/img/Header/my-account-logo.svg" />
          </a>
          <a class="ml-2 mr-2" href="#">
            <img src="/img/Header/Heart icon.svg" />
          </a>
          <a class="ml-2 mr-2" href="#">
            <img src="/img/Header/twissted-arrows.svg" />
          </a>
          <a class="ml-2" href="#">
            <img src="/img/Header/shoppingbag.svg" />
          </a>
        </div>
      </div>
    </div>
    <nav id="third-row-nav" class="container  container-fluid p-0 navbar-expand-lg navbar-light mt-4">
      <div class="container p-0">
        <div class="p-0 collapse container navbar-collapse d-flex no-wrap justify-content-between" id="navbarSupportedContent">
          <div class="d-lg-none hamburger-icon-primary order-3 order-xl-1 ml-2 mr-2 bg-primary d-flex justify-content-center align-items-center">
            <a href="#">
              <img src="/img/Header/Hamburger-menu.svg" />
            </a>
          </div>
          <div class="order-1 order-xl-2">
            <ul class="navbar-nav mr-auto">
              <li id="browse-categories-btn" class="nav-item dropdown bg-primary">
                <a class="ml-2 nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img class="mr-1 text-light" src="/img/Header/Hamburger-menu.svg" alt="Hamburger button" />
                  Browse Categories
                  <img class="ml-5 mr-0 arrow-width" src="/img/Header/arrow-down-menu-btn.svg" alt="arrow down" />
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li id="browse-categories-menu-item" class="nav-item ml-3">
                <router-link to="/"><a class="nav-link text-dark" href="#">Home</a></router-link>
              </li>
              <li id="browse-categories-menu-item" class="nav-item dropdown ml-3">
                <router-link to="/Shop"
                  ><a class="nav-link dropdown-toggle text-dark" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Shop</a></router-link
                >
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </li>
              <li id="browse-categories-menu-item" class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-dark ml-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Products</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </li>
              <li id="browse-categories-menu-item" class="nav-item dropdown ml-3">
                <a class="nav-link dropdown-toggle text-dark" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categories</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </li>
              <li id="browse-categories-menu-item" class="nav-item dropdown ml-3">
                <a class="nav-link dropdown-toggle text-dark" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </li>
              <li id="browse-categories-menu-item" class="nav-item ml-3">
                <a class="nav-link text-dark" href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div class="text-nowrap d-none d-sm-block special-offer-btn btn bg-primary ml-2 text-light order-2">SPECIAL OFFER</div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script></script>

<style lang="scss">
@import "../assets/styles/custom.scss";
.nav {
  a {
    color: white;

    &.router-link-exact-active {
      color: --primary;
    }
  }
}

#form-custom {
  #search-input-custom {
    border-radius: 20px 0 0 20px;
    margin: 0 !important;
    height: 40px;
  }
}
#search-dropdown-custom {
  height: 40px;
  border-left: 0 !important;
  border-right: 0 !important;
}

#search-btn-custom {
  height: 40px;
  border-radius: 0 20px 20px 0 !important;
}
@media (min-width: 992px) {
  #search-input-custom {
    min-width: 400px;
  }
}
@media (min-width: 768px) {
  #search-input-custom {
    max-width: 300px;
  }
}

#third-row-nav {
  border-top: 1px solid $danger;
  border-bottom: 1px solid $danger;

  .hamburger-icon-primary {
    width: 43px;
    height: 43px;
    border-radius: 6px;
  }
  a {
    font-size: 18px;
  }
  .arrow-width {
    width: 10px;
  }
  .dropdown-toggle::after {
    color: $primary;
  }
  #browse-categories-btn {
    width: 270px;
    .dropdown-toggle::after {
      content: none;
    }
  }
  .special-offer-btn {
    border-radius: 20px;
    width: 160px;
  }

  @media (max-width: 1000px) {
    #browse-categories-menu-item {
      display: none;
    }
    .special-offer-btn {
      display: none;
    }
  }
}
</style>

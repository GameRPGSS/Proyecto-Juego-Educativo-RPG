import AuthLogo from "./extensions/rpg.png";
import MenuLogo from "./extensions/sword.png";
import favicon from "./extensions/api.ico";

const config = {
  //Replace the Strapi logo in auth (login) views
  auth:{
    AuthLogo,
  },
  //Replace the favicon
  head:{
    favicon : favicon,
  },
  //Replace the Strapi logo in the main navigation
  menu:{
    MenuLogo,
  },
  //Extend the translations
  translations:{
    en:{
      "app.components.LeftMenu.navbar.title":"Api Game Dashboard",

      "app.components.LeftMenu.navbar.workplace":"Testing",

      "Auth.form.welcome.title":"Welcome to Api Game",

      "Auth.form.welcome.subtitle":"Login in your account",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":"Preference changes will apply only to you",
    }
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};

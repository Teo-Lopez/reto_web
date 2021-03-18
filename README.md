# <h1 align="center">Welcome to the-phone-cave 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/Teo-Lopez/reto_web#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/Teo-Lopez/reto_web/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-no-inactive.svg" />
  </a>
  <a href="https://github.com/Teo-Lopez/reto_web/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/Teo-Lopez/the-phone-cave" />
  </a>
  <img alt="Technology employed: react" src="https://img.shields.io/badge/react-17.0.1-blue"/>
  <img alt="Technology employed: express" src="https://img.shields.io/badge/express-4.17.1-blue"/>
</p>

> Phone Marketplace of _not_ the latest models.

This project is based on a coding challenge accessible  <a href="https://github.com/VictorRodriguezIronhack/reto_web">here</a>.

It's home shows all mobile phones which link to a detailed view for each one.

The data is served from an API Rest built using <code>Express.js</code> and <code>Node</code> and is displayed using <code>React</code>

### 🏠 [Homepage](https://github.com/Teo-Lopez/reto_web#readme)

## Install

```sh
cd client; npm install; cd ../server; npm install;
```

## Usage

In different terminals
```sh
cd server; npm run dev;
```
```sh
cd client; npm start;
```

The web will open by itself.

## Endpoint Table

### Client
Verb | Endpoint | Result
------------ | ------------- | -------------
GET | "/" | Full phone list
GET | "/details/:id" | Details of the phone

### Server

Verb | Endpoint | Result
------------ | ------------- | -------------
GET | "/api/phones" | Full phone json
GET | "/api/phones/:id" | Phone json by recovered by ID

## Author

👤 **Teodoro López**

- Github: [@Teo-Lopez](https://github.com/Teo-Lopez)
- LinkedIn: [@teodorolopezgarcia](https://linkedin.com/in/teodorolopezgarcia)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Teo-Lopez/reto_web/issues). You can also take a look at the [contributing guide](https://github.com/Teo-Lopez/reto_web/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Teodoro López](https://github.com/Teo-Lopez).<br />
This project is [ISC](https://github.com/Teo-Lopez/reto_web/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

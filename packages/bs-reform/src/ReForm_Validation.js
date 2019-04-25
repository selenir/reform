// Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");

var I18n_000 = /* ptBR : record */[
  /* required */"Campo obrigatório",
  /* email */"Email inválido"
];

var I18n_001 = /* en : record */[
  /* required */"Field is required",
  /* email */"Invalid email"
];

var I18n = /* module */[
  I18n_000,
  I18n_001
];

function getValidationError(param, values, value, i18n) {
  var validator = param[1];
  if (typeof validator === "number") {
    if (validator !== 0) {
      var match = (/\S+@\S+\.\S+/).test(value);
      if (match) {
        return undefined;
      } else {
        return i18n[/* email */1];
      }
    } else {
      var match$1 = value.length < 1;
      if (match$1) {
        return i18n[/* required */0];
      } else {
        return undefined;
      }
    }
  } else {
    return Curry._1(validator[0], values);
  }
}

exports.I18n = I18n;
exports.getValidationError = getValidationError;
/* No side effect */
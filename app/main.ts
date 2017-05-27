import {bootstrap}    from 'angular2/platform/browser'
import {SimpleHTTPComponent} from './demof.components'
import {HTTP_PROVIDERS} from "angular2/http";
import {enableProdMode} from 'angular2/core';

enableProdMode();
bootstrap(SimpleHTTPComponent,[HTTP_PROVIDERS]);//在bootstrap这里加入HTTP_PROVIDERS。没加会提示 No provider for Http， DI exception
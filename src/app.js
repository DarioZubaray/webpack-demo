import { mostrarMensaje } from './message'
import './style.scss';
import { mostrarMensajeTS } from './index.ts'

document.getElementById('btn-show-alert').addEventListener('click', mostrarMensaje)
document.getElementById('btn-show-alert-ts').addEventListener('click', mostrarMensajeTS)

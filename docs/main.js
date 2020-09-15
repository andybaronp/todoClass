/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/classes/index.js":
/*!******************************!*\
  !*** ./src/classes/index.js ***!
  \******************************/
/*! exports provided: Todo, TodoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_calss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.calss */ \"./src/classes/todo.calss.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return _todo_calss__WEBPACK_IMPORTED_MODULE_0__[\"Todo\"]; });\n\n/* harmony import */ var _todo_list_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list.class */ \"./src/classes/todo-list.class.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TodoList\", function() { return _todo_list_class__WEBPACK_IMPORTED_MODULE_1__[\"TodoList\"]; });\n\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/classes/index.js?");

/***/ }),

/***/ "./src/classes/todo-list.class.js":
/*!****************************************!*\
  !*** ./src/classes/todo-list.class.js ***!
  \****************************************/
/*! exports provided: TodoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoList\", function() { return TodoList; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\r\n\r\nclass TodoList {\r\n    \r\n    constructor(){\r\n      //  this.todos = [];\r\n         this.cargarLocalStorage()\r\n        \r\n   \r\n}\r\n    nuevoTodo(todo){\r\n        this.todos.push(todo);\r\n        this.guardarLocalStorage()  \r\n\r\n\r\n    }\r\n    eliminarTodo(id){\r\n\r\n        this.todos = this.todos.filter(todo => todo.id != id)\r\n        this.guardarLocalStorage()\r\n    \r\n    }\r\n    marcarCompletadoTodo(id){\r\n\r\n        \r\n        for(const todo of this.todos){\r\n            if(todo.id == id) {\r\n                \r\n                todo.completado = !todo.completado;\r\n                this.guardarLocalStorage()\r\n         break\r\n        }\r\n\r\n       }\r\n    }\r\n\r\n    eliminarCompletados(){\r\n        this.todos = this.todos.filter(todo => !todo.completado )\r\n        this.guardarLocalStorage()\r\n    \r\n    }\r\n\r\n    guardarLocalStorage(){\r\n\r\n        localStorage.setItem('todo',JSON.stringify(this.todos))\r\n    }\r\n\r\n    cargarLocalStorage(){\r\n\r\n        this.todos = (localStorage.getItem('todo')) \r\n                    ?\r\n             JSON.parse(localStorage.getItem('todo'))\r\n                    :\r\n            [];\r\n\r\n        \r\n\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/classes/todo-list.class.js?");

/***/ }),

/***/ "./src/classes/todo.calss.js":
/*!***********************************!*\
  !*** ./src/classes/todo.calss.js ***!
  \***********************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return Todo; });\nclass Todo {\r\n    constructor(tarea) {\r\n\r\n        this.tarea = tarea;\r\n        this.id = new Date().getTime();\r\n        this.completado = false;\r\n        this.creado = new Date() \r\n    }\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./src/classes/todo.calss.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: todoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoList\", function() { return todoList; });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ \"./src/classes/index.js\");\n/* harmony import */ var _js_componentes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/componentes */ \"./src/js/componentes.js\");\n\n\n\n\n\n\n\n\nconst todoList = new _classes__WEBPACK_IMPORTED_MODULE_1__[\"TodoList\"]();\ntodoList.todos.forEach(_js_componentes__WEBPACK_IMPORTED_MODULE_2__[\"crearTodoHtml\"]);\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/componentes.js":
/*!*******************************!*\
  !*** ./src/js/componentes.js ***!
  \*******************************/
/*! exports provided: crearTodoHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"crearTodoHtml\", function() { return crearTodoHtml; });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes */ \"./src/classes/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\n\n\nconst divTodoList = document.querySelector('.todo-list')\nconst txtInput =document.querySelector('.new-todo');\nconst btnBorraTodo = document.querySelector('.clear-completed')\nconst ulFiltro = document.querySelector('.filters')\nconst aFiltros = document.querySelectorAll('.filtro')\n\n\n\nconst crearTodoHtml  = (todo) =>{\n\nconst html = `\n\n                    <li class=\"${(todo.completado) ? 'completed' : ''}\" data-id=\"${todo.id}\">\n\t\t\t\t\t\t<div class=\"view\">\n\t\t\t\t\t\t\t<input class=\"toggle\" type=\"checkbox\" ${(todo.completado) ? 'checked' : ''} >\n\t\t\t\t\t\t\t<label>${todo.tarea}</label>\n\t\t\t\t\t\t\t<button class=\"destroy\"></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input class=\"edit\" value=\"Create a TodoMVC template\">\n\t\t\t\t\t</li>\n\n\n`\nconst div = document.createElement('div');\ndiv.innerHTML = html;\n\ndivTodoList.append(div.firstElementChild)\n\n\nreturn div.firstElementChild;\n}\n\n// event\n\n\ntxtInput.addEventListener('keyup', (e)=>{\n\n \n\n    if(e.keyCode === 13 && txtInput.value.length > 0) {\n        const nuevoTodo = new _classes__WEBPACK_IMPORTED_MODULE_0__[\"Todo\"](txtInput.value)\n        _index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"].nuevoTodo(nuevoTodo)\n        crearTodoHtml(nuevoTodo)\n        \n       \n        txtInput.value = '';\n    }\n})\n\n\ndivTodoList.addEventListener('click', (e)=> {\n\n    \n   const nombreElemento = e.target.localName;\n   const todoElemento = e.target.parentElement.parentElement\n    const todoId = todoElemento.getAttribute('data-id')\n\n   if(nombreElemento.includes('input')){\n       _index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"].marcarCompletadoTodo(todoId)\n       todoElemento.classList.toggle('completed')\n   }\n\n   \n   else if(nombreElemento.includes('button')){\n    _index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"].eliminarTodo(todoId)\n       divTodoList.removeChild(todoElemento)\n}\n})\n\nbtnBorraTodo.addEventListener('click', e => {\n\n    // todoList.guardarLocalStorage()\n    _index__WEBPACK_IMPORTED_MODULE_1__[\"todoList\"].eliminarCompletados()\n    \n    \n    for(let i = divTodoList.children.length-1; i >= 0; i--){\n        \n        const elemento = divTodoList.children[i]\n        \n        if (elemento.classList.contains('completed')){\n            divTodoList.removeChild(elemento)\n       } \n\n    }\n\n\n})\n\nulFiltro.addEventListener('click', e => {\n\n\nconst filtros = e.target.text; \nif(!filtros){return;}\nconsole.log(aFiltros);\naFiltros.forEach( elem => elem.classList.remove('selected') );\nevent.target.classList.add('selected');\n\nfor(const elemento of divTodoList.children){\n    elemento.classList.remove('hidden');\n\n    const completado = elemento.classList.contains('completed');\n\n\nswitch (filtros) {\n    case 'Pendientes':\n        if(completado){\n            elemento.classList.add('hidden')\n        }\n        \n        break;\n\n        case 'Completados':\n            if(!completado){\n                elemento.classList.add('hidden')\n            }\n            \n            break;\n\n}\n\n\n\n\n\n\n\n}\n})\n\n//# sourceURL=webpack:///./src/js/componentes.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ })

/******/ });
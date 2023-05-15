angular.module('app', [])
.component('helloWorld', {
template: '<h1 style="text-align:center">Hello World! This is {{$ctrl.name}}, and I am from {{$ctrl.class}}</h1>',
bindings: { name : '@' },
 controller: function()
{
 this.class = "IT-B";
}
});

(function () {
    "use strict";

    angular.module('battleShip')
        .directive('setupTableDirective', function ($compile, $timeout, SetupTableService) {
            return {
                restrict: 'E',
                templateUrl: 'app/bt-setup/assets/setup-table.html',
                controller: 'SetupControllerDirective',
                controllerAs: 'ctrl',
                bindToController: true,
                scope: {
                    width: '@',
                    height: '@'
                },
                link: function (scope, elem, attrs, ctrl) {

                    $timeout(function () { //We use timeout to run after a digest
                        var cells = elem.find('td');

                        cells.bind("click", function () {      // Binding
                            if (ctrl.selectedShip) {
                                var column = $(this).parent().children().index(this);
                                var row = $(this).parent().parent().children().index(this.parentNode);
                                if (ctrl.checkSetupShip(row, column) === false) {
                                    alert("Imposible");
                                } else {
                                    alert("Posible");
                                }
                            }
                        });

                        cells.bind("mouseover", function () {
                            if (ctrl.selectedShip) {
                                elem.find('tr').removeClass('danger');
                                elem.find('tr').removeClass('success');
                                elem.find('td').removeClass('danger');
                                elem.find('td').removeClass('success');
                                var columnNumber = $(this).parent().children().index(this);
                                var rowNumber = $(this).parent().parent().children().index(this.parentNode);
                                var row = $(this).parent();

                                if (ctrl.checkSetupShip(rowNumber, columnNumber) === false) {
                                    if (ctrl.verticalOrientation === 'false') {
                                        $(elem).find('.row-' + rowNumber).addClass('danger');
                                    } else {
                                        $(elem).find('.col-' + columnNumber).addClass('danger');
                                    }
                                } else {
                                    if (ctrl.verticalOrientation === 'false') {
                                        $(elem).find('.row-' + rowNumber).addClass('success');
                                    } else {
                                        $(elem).find('.col-' + columnNumber).addClass('success');
                                    }
                                }
                            }
                        });

                    });
                }
            };
        });
})();

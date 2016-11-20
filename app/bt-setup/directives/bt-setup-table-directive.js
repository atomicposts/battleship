(function () {
    "use strict";

    angular.module('battleShip')
        .directive('setupTableDirective', function ($timeout) {
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
                    if (ctrl.selectedShip) {
                        $timeout(function () { //We use timeout to run after a digest
                            var cells = elem.find('td');

                            cells.bind("click", function () {      // Binding
                                var column = $(this).parent().children().index(this);
                                var row = $(this).parent().parent().children().index(this.parentNode);
                                //console.log("column: " + column + " row: " + row);
                                if (ctrl.checkSetupShip(row, column) === false) {
                                    alert("no posible");
                                } else {
                                    // We call service to set ship
                                }
                            });

                            cells.bind("mouseover", function () {
                                elem.find('tr').removeClass('danger');
                                elem.find('tr').removeClass('success');
                                elem.find('td').removeClass('danger');
                                elem.find('td').removeClass('success');
                                var columnNumber = $(this).parent().children().index(this);
                                var rowNumber = $(this).parent().parent().children().index(this.parentNode);
                                var row = $(this).parent();
                                console.log(ctrl.verticalOrientation);

                                if (ctrl.checkSetupShip(rowNumber, columnNumber) === false) {
                                    if (ctrl.verticalOrientation === false) {
                                        $(elem).find('.row-' + rowNumber).addClass('danger');
                                    } else {
                                        $(elem).find('.col-' + columnNumber).addClass('danger');
                                    }
                                } else {
                                    if (ctrl.verticalOrientation === false) {
                                        $(elem).find('.row-' + rowNumber).addClass('success');
                                    } else {
                                        $(elem).find('.col-' + columnNumber).addClass('success');
                                    }
                                }
                            });


                        });
                    }
                }
            };
        });
})();

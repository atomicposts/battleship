(function () {
    'use strict';

    angular.module('bt-setup-module')
        .service('SetupTableCheckService', [ function() {

            var self = this;

            self.width = 0;
            self.height = 0;

            return {
                checkShip: checkShip
            };

            function checkShip(table, row, column, shipLength, vertical) {

                self.height = table.length;
                self.width = table[0].length;

                if (vertical !== 'true') {
                    return checkShipHorizontal(table, row, column, shipLength);
                } else {
                    return checkShipVertical(table, row, column, shipLength);
                }
            }

            function checkShipHorizontal(table, row, column, shipLength) {

                if ((column + shipLength) > self.width) {
                    return false;
                }

                var xMinLimit = (column === 0) ? 0 : column - 1;
                var xMaxLimit = ((column + shipLength) === self.width) ? self.width - 1 : column + shipLength + 1;

                for ( var i = xMinLimit; i < xMaxLimit; i++) {
                    if (table[row][i].value !== 0) {
                        return false;
                    }

                    if (row > 0 && (table[row - 1][i].value !== 0)) {
                        return false;
                    }

                    if (row < self.height - 1 && (table[row + 1][i].value !== 0)) {
                        return false;
                    }
                }

                return true;
            }

            function checkShipVertical(table, row, column, shipLength) {

                if ((row + shipLength) > self.height) {
                    return false;
                }

                var yMinLimit = (row === 0) ? 0 : row - 1;
                var yMaxLimit = ((row + shipLength) === self.height) ? self.height - 1 : row + shipLength + 1;

                for ( var i = yMinLimit; i < yMaxLimit; i++) {
                    if (table[i][column].value !== 0) {
                        return false;
                    }

                    if (column > 0 && (table[i][column - 1].value !== 0)) {
                        return false;
                    }

                    if (column < self.width - 1 && (table[i][column + 1].value !== 0)) {
                        return false;
                    }
                }

                return true;
            }


        }]);
})();
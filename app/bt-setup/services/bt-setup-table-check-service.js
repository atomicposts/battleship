(function () {
    'use strict';

    angular.module('battleShip')
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
                    if (table[i][row].value !== 0) {
                        return false;
                    }

                    if (row > 0 && (table[i][row -1].value !== 0)) {
                        return false;
                    }

                    if (row < self.height - 1 && (table[i][row + 1].value !== 0)) {
                        return false;
                    }
                }
            }

            function checkShipVertical(table, row, column, shipLength) {

                if ((row + shipLength) > self.width) {
                    return false;
                }

                var yMinLimit = (row === 0) ? 0 : row - 1;
                var yMaxLimit = ((row + shipLength) === self.height) ? self.height - 1 : row + shipLength + 1;

                for ( var i = yMinLimit; i < yMaxLimit; i++) {
                    if (table[column][i].value !== 0) {
                        return false;
                    }

                    if (column > 0 && (table[column - 1][i].value !== 0)) {
                        return false;
                    }

                    if (column < self.width - 2 && (table[column + 1][i].value !== 0)) {
                        return false;
                    }
                }
            }


        }]);
})();
(function () {
    'use strict';

    angular.module('battleShip')
        .service('SetupTableCheckService', [ function() {

            var table = [];
            var width;
            var height;

            return {
                checkShip: checkShip
            };

            function checkShip(row, column, shipLength, horizontal) {
                if (horizontal === true) {
                    return checkShipHorizontal(row, column, shipLength);
                } else {
                    return checkShipVertical(row, column, shipLength);
                }
            }

            function checkShipHorizontal(row, column, shipLength) {

                if ((column + shipLength) > width) {
                    return false;
                }

                var xMinLimit = (column === 0) ? 0 : column - 1;
                var xMaxLimit = ((column + shipLength) === width) ? width - 1 : column + shipLength + 1;

                for ( var i = xMinLimit; i < xMaxLimit; i++) {
                    if (table[i][row] !== 0) {
                        return false;
                    }

                    if (row > 0 && (table[i][row -1] !== 0)) {
                        return false;
                    }

                    if (row < height - 1 && (table[i][row + 1] !== 0)) {
                        return false;
                    }
                }
            }

            function checkShipVertical(row, column, shipLength) {

                if ((row + shipLength) > width) {
                    return false;
                }

                var yMinLimit = (row === 0) ? 0 : row - 1;
                var yMaxLimit = ((row + shipLength) === height) ? height - 1 : row + shipLength + 1;

                for ( var i = yMinLimit; i < yMaxLimit; i++) {
                    if (table[column][i] !== 0) {
                        return false;
                    }

                    if (column > 0 && (table[column - 1][i] !== 0)) {
                        return false;
                    }

                    if (column < width - 2 && (table[column + 1][i] !== 0)) {
                        return false;
                    }
                }
            }


        }]);
})();
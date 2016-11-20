(function () {
    'use strict';

    angular
        .module('battleShip')
        .factory('SetupTableTransformer', [function () {
            var service = {
                transform : transformResult
            };

            return service;

            function transformResult (result) {
                var resultTransformed = [];

                for ( var i = 0, maxHeight = result.length; i < maxHeight; i++ ) {
                    var row = [];
                    for (var j = 0, maxWidth = result[i].length; j < maxWidth; j++) {
                        row.push(createCell(result[i][j]));
                    }
                    resultTransformed.push(row);
                }

                return resultTransformed;
            }

            function createCell(value) {
                var cell = { value: value };

                switch (value) {
                    case 0:
                        cell.class = 'water';
                        break;
                    case -1:
                        cell.class = 'touch';
                        break;
                    default:
                        cell.class = 'ship';
                        break;
                }

                return cell;
            }

        }]);
})();
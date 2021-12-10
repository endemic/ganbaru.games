var PUZZLES = [
    {"size":5,"hints":[{"position":{"x":0,"y":0},"number":2},{"position":{"x":2,"y":3},"number":2},{"position":{"x":4,"y":4},"number":1}]},
    {"size":5,"hints":[{"position":{"x":0,"y":0},"number":null},{"position":{"x":2,"y":2},"number":4},{"position":{"x":4,"y":4},"number":null}]},
    {"size":5,"hints":[{"position":{"x":3,"y":0},"number":3},{"position":{"x":0,"y":3},"number":1}]},
    {"size":5,"hints":[{"position":{"x":3,"y":2},"number":1},{"position":{"x":4,"y":2},"number":2},{"position":{"x":1,"y":3},"number":0}]},
    {"size":5,"hints":[{"position":{"x":1,"y":1},"number":3},{"position":{"x":3,"y":2},"number":null},{"position":{"x":0,"y":4},"number":1},{"position":{"x":4,"y":4},"number":1}]},
    {"size":5,"hints":[{"position":{"x":1,"y":1},"number":2},{"position":{"x":2,"y":1},"number":0},{"position":{"x":1,"y":3},"number":1},{"position":{"x":2,"y":3},"number":1}]},
    {"size":5,"hints":[{"position":{"x":0,"y":0},"number":2},{"position":{"x":2,"y":3},"number":2},{"position":{"x":4,"y":4},"number":1}]},
    {"size":5,"hints":[{"position":{"x":0,"y":0},"number":null},{"position":{"x":2,"y":2},"number":4},{"position":{"x":4,"y":4},"number":null}]},
    {"size":5,"hints":[{"position":{"x":3,"y":0},"number":3},{"position":{"x":0,"y":3},"number":1}]},
    {"size":5,"hints":[{"position":{"x":3,"y":2},"number":1},{"position":{"x":4,"y":2},"number":2},{"position":{"x":1,"y":3},"number":0}]},
    {"size":5,"hints":[{"position":{"x":1,"y":1},"number":3},{"position":{"x":3,"y":2},"number":null},{"position":{"x":0,"y":4},"number":1},{"position":{"x":4,"y":4},"number":1}]},
    {"size":5,"hints":[{"position":{"x":1,"y":1},"number":2},{"position":{"x":2,"y":1},"number":0},{"position":{"x":1,"y":3},"number":1},{"position":{"x":2,"y":3},"number":1}]},
    {"size":5,"hints":[{"position":{"x":1,"y":1},"number":3},{"position":{"x":3,"y":2},"number":null},{"position":{"x":1,"y":3},"number":2}]},
    {"size":6,"hints":[{"position":{"x":5,"y":0},"number":0},{"position":{"x":3,"y":2},"number":2},{"position":{"x":5,"y":2},"number":0},{"position":{"x":0,"y":3},"number":0},{"position":{"x":2,"y":3},"number":2},{"position":{"x":0,"y":5},"number":0}]},
    {"size":6,"hints":[{"position":{"x":1,"y":0},"number":null},{"position":{"x":1,"y":1},"number":0},{"position":{"x":3,"y":2},"number":2},{"position":{"x":1,"y":4},"number":null},{"position":{"x":2,"y":4},"number":0}]},
    {"size":7,"hints":[{"position":{"x":0,"y":0},"number":null},{"position":{"x":1,"y":1},"number":2},{"position":{"x":3,"y":2},"number":null},{"position":{"x":4,"y":3},"number":1},{"position":{"x":1,"y":5},"number":null},{"position":{"x":0,"y":6},"number":1}]},
    {"size":7,"hints":[{"position":{"x":2,"y":1},"number":null},{"position":{"x":5,"y":1},"number":0},{"position":{"x":2,"y":2},"number":null},{"position":{"x":2,"y":3},"number":null},{"position":{"x":3,"y":3},"number":2},{"position":{"x":5,"y":5},"number":0}]},
    {"size":7,"hints":[{"position":{"x":2,"y":1},"number":null},{"position":{"x":1,"y":2},"number":2},{"position":{"x":2,"y":3},"number":2},{"position":{"x":4,"y":3},"number":null},{"position":{"x":5,"y":4},"number":2},{"position":{"x":4,"y":5},"number":null}]},
    {"size":7,"hints":[{"position":{"x":1,"y":1},"number":null},{"position":{"x":3,"y":3},"number":3},{"position":{"x":4,"y":3},"number":1},{"position":{"x":1,"y":5},"number":null}]},
    {"size":8,"hints":[{"position":{"x":2,"y":1},"number":2},{"position":{"x":4,"y":1},"number":2},{"position":{"x":6,"y":1},"number":1},{"position":{"x":1,"y":6},"number":1},{"position":{"x":3,"y":6},"number":2},{"position":{"x":5,"y":6},"number":2}]},
    {"size":8,"hints":[{"position":{"x":3,"y":1},"number":2},{"position":{"x":2,"y":2},"number":1},{"position":{"x":3,"y":2},"number":0},{"position":{"x":6,"y":4},"number":null},{"position":{"x":7,"y":4},"number":1},{"position":{"x":2,"y":5},"number":1},{"position":{"x":2,"y":6},"number":1},{"position":{"x":1,"y":7},"number":null}]},
    {"size":8,"hints":[{"position":{"x":5,"y":0},"number":1},{"position":{"x":1,"y":1},"number":3},{"position":{"x":2,"y":1},"number":null},{"position":{"x":6,"y":2},"number":0},{"position":{"x":0,"y":3},"number":null},{"position":{"x":4,"y":3},"number":null},{"position":{"x":3,"y":4},"number":4},{"position":{"x":7,"y":4},"number":0},{"position":{"x":1,"y":5},"number":2},{"position":{"x":5,"y":6},"number":1},{"position":{"x":6,"y":6},"number":null},{"position":{"x":2,"y":7},"number":null}]},
    {"size":8,"hints":[{"position":{"x":5,"y":0},"number":1},{"position":{"x":1,"y":1},"number":3},{"position":{"x":2,"y":1},"number":null},{"position":{"x":6,"y":2},"number":0},{"position":{"x":0,"y":3},"number":null},{"position":{"x":4,"y":3},"number":null},{"position":{"x":3,"y":4},"number":4},{"position":{"x":7,"y":4},"number":0},{"position":{"x":1,"y":5},"number":2},{"position":{"x":5,"y":6},"number":1},{"position":{"x":6,"y":6},"number":null},{"position":{"x":2,"y":7},"number":null}]},
    {"size":9,"hints":[{"position":{"x":1,"y":1},"number":2},{"position":{"x":3,"y":3},"number":2},{"position":{"x":5,"y":5},"number":2},{"position":{"x":7,"y":7},"number":2}]}
];

if (!localStorage.getObject('puzzles')) {
    localStorage.setObject('puzzles', PUZZLES);
}

PUZZLES = localStorage.getObject('puzzles');
var TUTORIALS = [
   /* LEVEL 1 */
   /*
    {
	    // blocks that need to be marked as "lit" before moving on
	    litCells: [
	        [0, 5, 10, 15, 20],
	        [1, 2, 3],
	        [21, 22, 23],
	        [13, 18],
	        [12],
	        [99]
	    ],
	    // Indices of hints that are displayed to player
	    hints: [
	        []
	    ],
	    // text displayed to player
	    text: [
	        'Step 1',
	        'Step 2',
	        'Step 3',
	        'Step 4',
	        'Use logic to figure out\nwhich blocks to mark.\nGood luck!',
	        'Great job!'
		]
	}
	*/
];
/*jslint sloppy: true */
/*globals Arcadia, window, document, localStorage */

Arcadia.isLocked = function () {
    return window.store !== undefined && localStorage.getBoolean('unlocked') === false;
};

Arcadia.cycleBackground = function () {
    var COLORS = ['red', 'green', 'purple', 'blue', 'teal', 'grey', 'maroon'],
        currentColorIndex;

    currentColorIndex = parseInt(localStorage.getItem('currentColorIndex'), 10) || 0;

    currentColorIndex += 1;

    if (currentColorIndex >= COLORS.length) {
        currentColorIndex = 0;
    }

    localStorage.setItem('currentColorIndex', currentColorIndex);
    document.body.style['background-color'] = COLORS[currentColorIndex];
    Cell.LIGHT_COLOR = COLORS[currentColorIndex];
    return COLORS[currentColorIndex];
};
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

if (!String.prototype.capitalize) {
  String.prototype.capitalize = function () {
    return this[0].toUpperCase() + this.substring(1);
  };
}
// (function () {
    console.log('why is this not working?');
    Storage.namespace = 'akari';

    var originalGetItem = Storage.prototype.getItem,
        originalSetItem = Storage.prototype.setItem;

    Storage.prototype.setItem = function (key, value) {
        key = this.namespace(key);
        return originalSetItem.apply(this, arguments);
    };

    Storage.prototype.getItem = function (key) {
        key = this.namespace(key);
        return originalGetItem.apply(this, arguments);
    };

    Storage.prototype.namespace = function (key) {
        return Storage.namespace + ':' + key;
    };

    Storage.prototype.setObject = function (key, value) {
        this.setItem(key, JSON.stringify(value));
    };

    Storage.prototype.getObject = function (key) {
        var value = this.getItem(key);

        if (value) {
            return JSON.parse(value);
        }

        return null;
    };

    Storage.prototype.setBoolean = function (key, value) {
        this.setItem(key, !!value);
    };

    Storage.prototype.getBoolean = function (key) {
        return this.getItem(key) == 'true';
    };
// })();
/*jslint this: true, browser: true */
/*global Arcadia, window, Grid */

(function (root) {
    'use strict';

    var Cell;

    Cell = function () {
        Arcadia.Shape.apply(this, arguments);

        this.size = {width: Grid.CELL_WIDTH, height: Grid.CELL_HEIGHT};
        this.vertices = 4;
        this.color = Cell.DEFAULT_COLOR;
        this.border = '1px black';
        this.status = Cell.STATUS.EMPTY;

        // Keeps track if cell is "lit" by more than one
        // light... this value needs to be "1" for all lit
        // cells for the puzzle to be complete
        this.lightSources = 0;

        // Show a "flag" or "light", based on cell state
        this.icon = new Arcadia.Shape({
            size: {
                width: this.size.width / 2,
                height: this.size.height / 2
            },
            color: 'black'
        });
        this.add(this.icon);
        this.deactivate(this.icon);

        // Used for the "hint" state
        this.label = new Arcadia.Label({
            font: '24px monospace',
            text: this.number
        });
        this.add(this.label);
        this.deactivate(this.label);
    };

    Cell.prototype = new Arcadia.Shape();

    Cell.STATUS = {
        EMPTY: 0,
        LIGHT: 2,
        FLAG: 3,
        HINT: 4
    };

    Cell.DEFAULT_COLOR = 'white';
    Cell.LIGHT_COLOR = 'yellow';
    Cell.HINT_COLOR = 'black';

    Cell.prototype.incrementLightSources = function () {
        this.lightSources += 1;

        if (this.lightSources === 1) {
            this.color = Cell.LIGHT_COLOR;
        }
    };

    Cell.prototype.decrementLightSources = function () {
        this.lightSources -= 1;

        if (this.lightSources <= 0) {
            this.lightSources = 0;
            this.color = Cell.DEFAULT_COLOR;
        }
    };

    /* TODO: combine all these conversion methods into a single
    method that uses a switch statement, so we can ensure integrity
    of state change order; i.e. empty -> light -> flag -> empty */

    Cell.prototype.convertToLight = function () {
        this.status = Cell.STATUS.LIGHT;
        this.activate(this.icon);
        this.icon.vertices = 0;
    };

    Cell.prototype.convertToFlag = function () {
        this.status = Cell.STATUS.FLAG;
        this.icon.vertices = 4;

        // this.icon.path = function (context) {
        //     // draw a flag here
        //     // something something * Arcadia.PIXEL_RATIO
        //     var x = -this.size.width / 2 * Arcadia.PIXEL_RATIO;
        //     var y = -this.size.height / 2 * Arcadia.PIXEL_RATIO;
        //     var width = this.size.width * Arcadia.PIXEL_RATIO;
        //     var height = this.size.height * Arcadia.PIXEL_RATIO;
        //     context.lineWidth = 5 * Arcadia.PIXEL_RATIO;
        //     context.strokeRect(x, y, width, height);
        // };
        // this.icon.dirty = true; // trigger redraw
    };

    Cell.prototype.convertToEmpty = function () {
        this.number = null;
        this.color = Cell.DEFAULT_COLOR;
        if (this.lightSources > 0) {
            this.color = Cell.LIGHT_COLOR;
        }
        this.status = Cell.STATUS.EMPTY;
        this.deactivate(this.icon);
        this.deactivate(this.label);
    };

    Cell.prototype.convertToHint = function (number) {
        // Funky condition here, because `0` (a valid hint #) evals to `false`
        this.number = Number.isInteger(number) ? number : null;
        this.color = Cell.HINT_COLOR;
        this.status = Cell.STATUS.HINT;

        if (this.number !== null) {
            this.label.text = this.number;
            this.activate(this.label);
        }
    };

    Cell.prototype.reset = function () {
        this.lightSources = 0;
        this.convertToEmpty();
    };

    root.Cell = Cell;
}(window));
/*jslint this: true, browser: true, for: true */
/*global Arcadia, window */

(function (root) {
    'use strict';

    var Grid;

    Grid = function (options) {
        Arcadia.Shape.apply(this, arguments);

        this.data = options.data || {size: 10, hints: []};

        this.size = {
            width: Grid.CELL_WIDTH * this.data.size,
            height: Grid.CELL_HEIGHT * this.data.size
        };
        this.color = null;
        this.border = '2px black';

        // Default to "play," rather than "edit"
        this.mode = Grid.MODES.PLAY;

        this.calculateBounds();

        // Create grid cells
        this.cells = [];
        while (this.cells.length < Math.pow(this.data.size, 2)) {
            var x = this.cells.length % this.data.size;
            var y = Math.floor(this.cells.length / this.data.size);
            var c = new Cell({
                position: {
                    x: -this.size.width / 2 + (x * Grid.CELL_WIDTH) + Grid.CELL_WIDTH / 2,
                    y: -this.size.height / 2 + (y * Grid.CELL_HEIGHT) + Grid.CELL_HEIGHT / 2
                }
            });
            this.add(c);
            this.cells.push(c);
        }

        // Update cells used for hints
        this.data.hints.forEach(function (hint) {
            var x = hint.position.x;
            var y = hint.position.y;
            var index = this.data.size * y + x;
            this.cells[index].convertToHint(hint.number);
        }.bind(this));
    };

    Grid.prototype = new Arcadia.Shape();

    Grid.MAX_SIZE = 10;
    Grid.MIN_SIZE = 5;

    Grid.MAX_WIDTH = Grid.MAX_HEIGHT = 372;
    Grid.CELL_WIDTH = Grid.MAX_WIDTH / 10;
    Grid.CELL_HEIGHT = Grid.MAX_HEIGHT / 10;

    Grid.MODES = {
        PLAY: 'play',
        EDIT: 'edit'
    };

    Grid.prototype.containsPoint = function (point) {
        return point.x < this.bounds.right &&
                point.x > this.bounds.left &&
                point.y < this.bounds.bottom &&
                point.y > this.bounds.top;
    };

    Grid.prototype.getRowAndColumn = function (point) {
        if (!this.containsPoint(point)) {
            return [null, null];
        }

        var row = Math.floor((point.y - this.bounds.top) / Grid.CELL_WIDTH);
        var column = Math.floor((point.x - this.bounds.left) / Grid.CELL_HEIGHT);

        return [row, column];
    };

    Grid.prototype.calculateBounds = function () {
        var right = this.size.width / 2;
        var bottom = this.size.height / 2;

        // Get bounds of user interactive area
        this.bounds = {
            right: right + this.position.x,
            left: (right - (Grid.CELL_WIDTH * this.data.size)) + this.position.x,
            bottom: bottom + this.position.y,
            top: (bottom - (Grid.CELL_HEIGHT * this.data.size)) + this.position.y
        };
    };

    Grid.prototype.resize = function (newSize) {
        if (!Number.isInteger(newSize)) {
            return;
        }

        this.data.size = newSize;

        // Add new cells if necessary
        while (this.cells.length < Math.pow(this.data.size, 2)) {
            var c = new Cell();
            this.add(c);
            this.cells.push(c);
        }

        this.size = {
            width: Grid.CELL_WIDTH * this.data.size,
            height: Grid.CELL_HEIGHT * this.data.size
        };

        // Hide all cells, then show correct # of cells
        this.cells.forEach(function (cell) {
            this.deactivate(cell);
        }.bind(this));

        this.cells.forEach(function (cell, index) {
            if (index >= Math.pow(this.data.size, 2)) {
                return;
            }

            this.activate(cell);
            var x = index % this.data.size;
            var y = Math.floor(index / this.data.size);

            cell.position = {
                x: -this.size.width / 2 + (x * Grid.CELL_WIDTH) + Grid.CELL_WIDTH / 2,
                y: -this.size.height / 2 + (y * Grid.CELL_HEIGHT) + Grid.CELL_HEIGHT / 2
            };
        }.bind(this));

        this.calculateBounds();
    };

    Grid.prototype.onPointEnd = function (points) {
        var values = this.getRowAndColumn(points[0]);
        var row = values[0];
        var column = values[1];

        if (row === null || column === null) {
            return;
        }

        // Get selected cell
        var size = this.data.size;
        var index = row * size + column;
        var cell = this.cells[index];

        // Editor mode
        if (this.mode === Grid.MODES.EDIT) {
            switch (cell.status) {
            case Cell.STATUS.EMPTY:
                cell.convertToHint();
                break;
            case Cell.STATUS.HINT:
                if (cell.number >= 4) {
                    cell.convertToEmpty();
                } else if (cell.number !== null) {
                    cell.convertToHint(cell.number + 1);
                } else {
                    cell.convertToHint(0);
                }
                break;
            }

            // Exit early to avoid "normal" gameplay handling
            return;
        }

        switch (cell.status) {
            case Cell.STATUS.EMPTY:
                // place a light
                cell.convertToLight();

                var i;

                // Go to the left of the light
                for (i = index - 1; i >= row * size; i -= 1) {
                    if (this.cells[i].status === Cell.STATUS.HINT) {
                        break;
                    }
                    this.cells[i].incrementLightSources();
                }

                // Go to the right of the light
                for (i = index + 1; i < row * size + size; i += 1) {
                    if (this.cells[i].status === Cell.STATUS.HINT) {
                        break;
                    }
                    this.cells[i].incrementLightSources();
                }

                // Go up from the light
                for (i = index - size; i >= 0; i -= size) {
                    if (this.cells[i].status === Cell.STATUS.HINT) {
                        break;
                    }
                    this.cells[i].incrementLightSources();
                }

                // Go down from the light
                for (i = index + size; i < Math.pow(size, 2); i += size) {
                    if (this.cells[i].status === Cell.STATUS.HINT) {
                        break;
                    }
                    this.cells[i].incrementLightSources();
                }

                // Increment the light source itself
                cell.incrementLightSources();

                break;
            case Cell.STATUS.LIGHT:
                // turn to a flag
                cell.convertToFlag();

                var i;

                // Go to the left of the light
                for (i = index - 1; i >= row * size; i -= 1) {
                    if (this.cells[i].status === Cell.STATUS.HINT) {
                        break;
                    }
                    this.cells[i].decrementLightSources();
                }

                // Go to the right of the light
                for (i = index + 1; i < row * size + size; i += 1) {
                    if (this.cells[i].status === Cell.STATUS.HINT) {
                        break;
                    }
                    this.cells[i].decrementLightSources();
                }

                // Go up from the light
                for (i = index - size; i >= 0; i -= size) {
                    if (this.cells[i].status === Cell.STATUS.HINT) {
                        break;
                    }
                    this.cells[i].decrementLightSources();
                }

                // Go down from the light
                for (i = index + size; i < Math.pow(size, 2); i += size) {
                    if (this.cells[i].status === Cell.STATUS.HINT) {
                        break;
                    }
                    this.cells[i].decrementLightSources();
                }

                // Increment the light source itself
                cell.decrementLightSources();
                break;
            case Cell.STATUS.FLAG:
                // turn empty
                cell.convertToEmpty();
                break;
            case Cell.STATUS.HINT:
                // do nothing, can't modify these
                break;
            default:
                console.warn('Unknown cell status!', cell.status);
                break;
        }
    };

    Grid.prototype.isComplete = function () {
        var size = this.data.size;

        for (var i = 0; i < this.cells.length; i += 1) {
            var cell = this.cells[i];

            // fail if a cell is unlit
            if (cell.status !== Cell.STATUS.HINT && cell.lightSources < 1) {
                console.log('Cell ', i, ' is not lit');
                return false;
            }

            // fail if a light is on an already-lit cell
            if (cell.status === Cell.STATUS.LIGHT && cell.lightSources > 1) {
                console.log('Cell ', i, ' has more than one light source');
                return false;
            }

            // If a cell is a hint, check for appropriate number of
            // lights around it
            if (cell.status === Cell.STATUS.HINT && cell.number) {
                var up = i - size;
                var left = i - 1;
                var right = i + 1;
                var down = i + size;

                // consider cells at the edge of the grid
                if (up < 0) {
                    up = null;
                }

                if (down >= this.cells.length) {
                    down = null;
                }

                if (Math.floor(left / size) !== Math.floor(i / size)) {
                    left = null;
                }

                if (Math.floor(right / size) !== Math.floor(i / size)) {
                    right = null;
                }

                var lightsCounter = 0;
                [up, down, left, right].forEach(function (index) {
                    if (index && this.cells[index].status === Cell.STATUS.LIGHT) {
                        lightsCounter += 1;
                    }
                }.bind(this));

                if (cell.number !== lightsCounter) {
                    console.log('Cell ', i, ' has ', lightsCounter, ' lights around it, but needs ', cell.number);
                    return false;
                }
            }
        }

        return true;
    };

    Grid.prototype.reset = function () {
        this.cells.forEach(function (cell) {
            if (cell.status !== Cell.STATUS.HINT) {
                cell.reset();
            }
        });
    };

    root.Grid = Grid;
}(window));
	/*jslint this: true, browser: true */
/*global Arcadia, window, PUZZLES */

(function (root) {
    'use strict';

    var Thumbnail;

    Thumbnail = function () {
        Arcadia.Shape.apply(this, arguments);

        this.size = {
            width: Thumbnail.SIZE,
            height: Thumbnail.SIZE
        };

        this.border = '2px white';
        this.color = null;

        this.pixels = new Arcadia.Shape({
            size: {
                width: this.size.width,
                height: this.size.height
            }
        });

        this.pixels.path = function (context) {
            if (!this.hints) {
                return;
            }

            var pixelSize = this.size.width / this.puzzleSize * Arcadia.PIXEL_RATIO;
            var originX = -this.size.width / 2 * Arcadia.PIXEL_RATIO;
            var originY = -this.size.height / 2 * Arcadia.PIXEL_RATIO;

            context.fillStyle = 'white';

            this.hints.forEach(function (hint) {
                var x = hint.position.x;
                var y = hint.position.y;

                context.fillRect(originX + (hint.position.x * pixelSize),
		                         originY + (hint.position.y * pixelSize),
		                         pixelSize,
		                         pixelSize);
            });
        };

        this.add(this.pixels);
    };

    Thumbnail.prototype = new Arcadia.Shape();

    Thumbnail.SIZE = 75;

    Thumbnail.prototype.drawPreview = function (index, complete) {
        // Can't draw a preview without data
        // TODO: maybe don't rely on global var here
        if (PUZZLES[index] === undefined) {
            this.alpha = 0;
            return;
        }

        if (this.alpha < 1) {
            this.alpha = 1;
        }

        if (complete) {
            this.border = '2px limegreen';
        } else if (Arcadia.isLocked() && index >= Arcadia.FREE_LEVEL_COUNT) {
            this.border = '2px crimson';
        } else {
            this.border = '2px white';
        }

        this.pixels.puzzleSize = PUZZLES[index].size;
        this.pixels.hints = PUZZLES[index].hints;
        this.pixels.dirty = true;
    };

    Thumbnail.prototype.highlight = function () {
        this._border.width = 5;
        this.dirty = true;
        this.scale = 1.1;
    };

    Thumbnail.prototype.lowlight = function () {
        this._border.width = 2;
        this.dirty = true;
        this.scale = 1;
    };

    root.Thumbnail = Thumbnail;
}(window));
/*jslint this, browser */
/*global window, Arcadia, sona, TitleScene, PUZZLES */

(function (root) {
    'use strict';

    var AboutScene = function () {
        Arcadia.Scene.apply(this);

        Arcadia.cycleBackground();

        var BUTTON_MARGIN = 65;

        var title = new Arcadia.Label({
            text: 'about',
            font: '64px monospace',
            position: {x: 0, y: -200}
        });
        this.add(title);

        var backButton = new Arcadia.Button({
            position: {x: -this.size.width / 2 + 65, y: -this.size.height / 2 + 25},
            size: {width: 120, height: 40},
            color: null,
            border: '2px white',
            text: '< title',
            font: '24px monospace',
            action: function () {
                sona.play('button');
                Arcadia.changeScene(TitleScene);
            }
        });
        this.add(backButton);

        var creditsText = [
            'Programming by Nathan Demick',
            'Puzzle concept by Nikoli',
            '(c) 2016 Ganbaru Games',
            'https://ganbarugames.com'
        ];

        var detailLabel = new Arcadia.Label({
            text: creditsText.join('\n'),
            font: '20px monospace',
            position: {x: 0, y: -75}
        });
        this.add(detailLabel);

        /* Lawl not actually checking that localstorage bool */
        // var sfxToggleButton = new Arcadia.Button({
        //     position: { x: 0, y: 50 },
            // size: {width: 180, height: 50},
            // color: null,
            // border: '2px white',
            // text: (localStorage.getBoolean('playSfx') ? 'Sound on' : 'Sound off'),
            // font: '36px monospace',
        //     action: function () {
        //         sona.play('button');

        //         if (localStorage.getBoolean('playSfx')) {
        //             localStorage.setBoolean('playSfx', false);
        //             this.text = 'Sound off';
        //         } else {
        //             localStorage.setBoolean('playSfx', true);
        //             this.text = 'Sound on';
        //         }
        //     }
        // });
        // this.add(sfxToggleButton);

        var dataResetButton = new Arcadia.Button({
            // position: { x: 0, y: sfxToggleButton.position.y + 60 },
            position: {x: 0, y: 60},
            size: {width: 240, height: 50},
            color: null,
            border: '2px white',
            text: 'reset data',
            font: '36px monospace',
            action: function () {
                sona.play('button');

                if (window.confirm('Reset all saved data?')) {
                    var completedPuzzles = [];
                    while (completedPuzzles.length < PUZZLES.length) {
                        completedPuzzles.push(null);
                    }
                    localStorage.setObject('completedPuzzles', completedPuzzles);
                }
            }
        });
        this.add(dataResetButton);

        if (Arcadia.ENV.cordova) {
            var rateButton = new Arcadia.Button({
                position: {x: 0, y: dataResetButton.position.y + BUTTON_MARGIN},
                size: {width: 240, height: 50},
                color: null,
                border: '2px white',
                text: 'feedback',
                font: '36px monospace',
                action: function () {
                    window.sona.play('button');
                    window.open('itms-apps://itunes.apple.com/app/id1067169429');
                }
            });
            this.add(rateButton);

            var moreGamesButton = new Arcadia.Button({
                position: {x: 0, y: rateButton.position.y + BUTTON_MARGIN},
                size: {width: 240, height: 50},
                color: null,
                border: '2px white',
                text: 'more games',
                font: '36px monospace',
                action: function () {
                    window.sona.play('button');
                    window.open('itms-apps://itunes.com/apps/ganbarugames');
                }
            });
            this.add(moreGamesButton);
        }
    };

    AboutScene.prototype = new Arcadia.Scene();

    root.AboutScene = AboutScene;
}(window));
/*jslint this, browser */
/*global window, Arcadia, sona, PuzzleSelectScene */

(function (root) {
    'use strict';

    var CreditsScene = function () {
        Arcadia.Scene.apply(this, arguments);

        var buttonPadding = 15;

        Arcadia.cycleBackground();

        var title = new Arcadia.Label({
            position: {x: 0, y: -167},
            font: '48px monospace',
            text: 'thanks\nfor\nplaying!'
        });
        this.add(title);

        var creditsText = [
            'Programming by Nathan Demick',
            'Puzzle concept by Nikoli',
            '(c) 2011-2016 Ganbaru Games',
            'https://ganbarugames.com'
        ].join('\n');

        var description = new Arcadia.Label({
            position: {x: 0, y: 33},
            font: '20px monospace',
            text: creditsText
        });
        this.add(description);

        var button = new Arcadia.Button({
            position: {x: 0, y: 200},
            color: null,
            border: '2px #fff',
            padding: buttonPadding,
            text: 'OK',
            font: '36px monospace',
            action: function () {
                // Clear out saved level data here! start over like a champ
                // localStorage.setObject('completedPuzzles', new Array(PUZZLES.length));
                sona.play('button');
                Arcadia.changeScene(PuzzleSelectScene);
            }
        });
        this.add(button);
    };

    CreditsScene.prototype = new Arcadia.Scene();

    root.CreditsScene = CreditsScene;
}(window));
/*jslint this, browser */
/*global window, Arcadia, sona, TitleScene, Square, Grid, Clue */

(function (root) {
    'use strict';

    var EditorScene = function (options) {
        Arcadia.Scene.apply(this);
        Arcadia.cycleBackground();

        options = options || {};

        var data;

        if (options.puzzleIndex) {
            data = PUZZLES[options.puzzleIndex];
        }

        this.verticalPadding = 70;
        this.grid = new Grid({
            data: data,
            position: {
                x: 0,
                y: this.size.height / 2 - Grid.MAX_HEIGHT / 2 - this.verticalPadding
            }
        });
        this.add(this.grid);

        this.drawUi();
    };

    EditorScene.prototype = new Arcadia.Scene();

    EditorScene.prototype.save = function () {
        /*
            Puzzle data format: {
                size: 8,
                hints: [
                    {position: {x: 5, y: 0}, number: 1},
                    {position: {x: 1, y: 1}, number: 3},
                    {position: {x: 2, y: 1}, number: null}
                ]
            };
        */

        var puzzles = localStorage.getObject('puzzles') || [];
        var self = this;
        var data = {
            size: this.grid.data.size,
            hints: []
        };

        this.grid.cells.forEach(function (cell, index) {
            var size = this.grid.data.size;

            if (index >= Math.pow(size, 2) || cell.status !== Cell.STATUS.HINT) {
                return;
            }

            // Cell coordinates are stored with origin at top left
            var row = Math.floor(index / size);
            var column = index % size;
            var number = cell.number;

            data.hints.push({position: {x: column, y: row}, number: number});
        }.bind(this));

        // debugger;
        puzzles.push(data);
        localStorage.setObject('puzzles', puzzles);
        console.log(JSON.stringify(data));
    };

    EditorScene.prototype.drawUi = function () {
        var padding = 10;
        var buttonWidth = Grid.MAX_WIDTH / 2 - padding;
        var buttonHeight = 40;
        var self = this;

        var smallerButton = new Arcadia.Button({
            color: null,
            border: '3px white',
            label: new Arcadia.Label({
                text: 'smaller',
                font: '24px monospace'
            }),
            size: {width: buttonWidth, height: buttonHeight},
            position: {
                x: buttonWidth / 2 + padding / 2,
                y: -this.size.height / 2 + buttonHeight / 2 + this.verticalPadding
            },
            action: function () {
                sona.play('button');

                var size = this.grid.data.size;
                if (size > Grid.MIN_SIZE) {
                    size -= 1;
                    this.grid.resize(size);
                }
            }.bind(this)
        });
        this.add(smallerButton);

        var biggerButton = new Arcadia.Button({
            color: null,
            border: '3px white',
            label: new Arcadia.Label({
                text: 'bigger',
                font: '24px monospace'
            }),
            size: {width: buttonWidth, height: buttonHeight},
            position: {
                x: -buttonWidth / 2 - padding / 2,
                y: -this.size.height / 2 + buttonHeight / 2 + this.verticalPadding
            },
            action: function () {
                sona.play('button');

                var size = this.grid.data.size;
                if (size < Grid.MAX_SIZE) {
                    size += 1;
                    this.grid.resize(size);
                }
            }.bind(this)
        });
        this.add(biggerButton);

        var playButton = new Arcadia.Button({
            color: 'rgba(255, 255, 255, 0.25)',
            border: '3px white',
            label: new Arcadia.Label({
                text: 'play',
                font: '24px monospace'
            }),
            size: {width: buttonWidth, height: buttonHeight},
            position: {
                x: buttonWidth / 2 + padding / 2,
                y: smallerButton.position.y + smallerButton.size.height + padding
            },
            action: function () {
                sona.play('button');
                // Change action to place lights; normal gameplay
                // TODO: highlight button in some way
                playButton.color = 'rgba(255, 255, 255, 0.25)';
                editButton.color = null;
                this.grid.mode = Grid.MODES.PLAY;
            }.bind(this)
        });
        this.add(playButton);

        var editButton = new Arcadia.Button({
            color: null,
            border: '3px white',
            label: new Arcadia.Label({
                text: 'edit',
                font: '24px monospace'
            }),
            size: {width: buttonWidth, height: buttonHeight},
            position: {
                x: -buttonWidth / 2 - padding / 2,
                y: biggerButton.position.y + biggerButton.size.height + padding
            },
            action: function () {
                sona.play('button');
                // Change action to place hints; puzzle editor
                // TODO: highlight button in some way
                playButton.color = null;
                editButton.color = 'rgba(255, 255, 255, 0.25)';
                this.grid.mode = Grid.MODES.EDIT;
            }.bind(this)
        });
        this.add(editButton);

        var quitButton = new Arcadia.Button({
            color: null,
            border: '3px white',
            label: new Arcadia.Label({
                text: 'quit',
                font: '24px monospace'
            }),
            size: {width: buttonWidth, height: buttonHeight},
            position: {
                x: buttonWidth / 2 + padding / 2,
                y: playButton.position.y + playButton.size.height + padding
            },
            action: function () {
                sona.play('button');
                Arcadia.changeScene(PuzzleSelectScene);
            }
        });
        this.add(quitButton);

        var saveButton = new Arcadia.Button({
            color: null,
            border: '3px white',
            label: new Arcadia.Label({
                text: 'save',
                font: '24px monospace'
            }),
            size: {width: buttonWidth, height: buttonHeight},
            position: {
                x: -buttonWidth / 2 - padding / 2,
                y: editButton.position.y + editButton.size.height + padding
            },
            action: function () {
                sona.play('button');
                this.save();
            }.bind(this)
        });
        this.add(saveButton);
    };

    root.EditorScene = EditorScene;
}(window));
/*jslint this, browser */
/*global window, Arcadia, sona, PUZZLES, TUTORIALS, Grid, Cell, PuzzleSelectScene */

(function (root) {
    'use strict';

    var GameScene = function (options) {
        Arcadia.Scene.apply(this, arguments);

        options = options || {};

        Arcadia.cycleBackground();

        // TODO: change this to `puzzleIndex` or something
        this.level = options.level || 0;
        localStorage.setItem('selectedLevel', this.level);
        this.levelData = PUZZLES[this.level];
        this.showTutorial = !!TUTORIALS[this.level];
        this.tutorialStep = 0;

        this.timer = 0;
        this.VERTICAL_PADDING = 77;
        this.drawUi();

        // Puzzle grid
        this.grid = new Grid({
            data: this.levelData,
            position: {
                x: 0,
                y: this.size.height / 2 - Grid.MAX_HEIGHT / 2 - this.VERTICAL_PADDING
            }
        });
        this.add(this.grid);

        if (this.showTutorial) {
            this.displayTutorial();
        }
    };

    GameScene.prototype = new Arcadia.Scene();

    GameScene.prototype.update = function (delta) {
        Arcadia.Scene.prototype.update.call(this, delta);

        if (this.gameOver) {
            return;
        }

        this.timer += delta;

        var zeroPad = function (string, length) {
            string = String(string);
            length = parseInt(length, 10);

            while (string.length < length) {
                string = '0' + string;
            }

            return string;
        };

        var minutes = zeroPad(Math.round(this.timer / 60), 2);
        var seconds = zeroPad(Math.round(this.timer % 60), 2);

        this.timerLabel.text = 'Time\n' + minutes + ':' + seconds;

        if (this.showTutorial) {
            var square = TUTORIALS[this.level].squares[this.tutorialStep];

            var success = this.squares.find(function (s) {
                return Math.round(s.position.x) === Math.round(square.position.x) &&
                        Math.round(s.position.y) === Math.round(square.position.y) &&
                        s.area === square.area;
            });

            if (success) {
                this.tutorialStep += 1;
                this.displayTutorial();
            }
        }
    };

    GameScene.prototype.displayTutorial = function () {
        this.tutorialLabel.text = TUTORIALS[this.level].text[this.tutorialStep] || '';
        var hintInfo = TUTORIALS[this.level].hints[this.tutorialStep];
        if (hintInfo) {
            this.hint.position = hintInfo.position;
            this.hint.size = hintInfo.size;
        }
    };

    GameScene.prototype.onPointStart = function (points) {
        Arcadia.Scene.prototype.onPointStart.call(this, points);

        if (this.gameOver) {
            return;
        }

        // TODO: maybe something here?
    };

    GameScene.prototype.onPointMove = function (points) {
        Arcadia.Scene.prototype.onPointMove.call(this, points);

        if (this.gameOver) {
            return;
        }

        // TODO: maybe something here?
    };

    GameScene.prototype.onPointEnd = function (points) {
        Arcadia.Scene.prototype.onPointEnd.call(this, points);

        // This event is automatically passed down into the "grid" object

        if (this.gameOver) {
            return;
        }

        // Check if player has won
        if (this.grid.isComplete()) {
            this.win();
        }
    };

    GameScene.prototype.win = function () {
        this.gameOver = true;

        var completedPuzzles = localStorage.getObject('completedPuzzles') || [];
        while (completedPuzzles.length < PUZZLES.length) {
            completedPuzzles.push(null);
        }
        completedPuzzles[this.level] = true;
        localStorage.setObject('completedPuzzles', completedPuzzles);

        window.setTimeout(function () {
            sona.play('win');

            // Hide existing crap
            this.grid.tween('alpha', 0, 500);
            this.remove(this.hint);
            this.remove(this.tutorialLabelBackground);

            // Show new crap
            this.add(this.completeBackground);
            this.completeBackground.scale = 0;
            window.setTimeout(function () {
                this.completeBackground.tween('scale', 1, 1000, 'expoOut');
            }.bind(this), 250);
        }.bind(this), 500);
    };

    GameScene.prototype.drawUi = function () {
        var BUTTON_PADDING = 5;
        var self = this;

        var quitButton = new Arcadia.Button({
            color: null,
            border: '2px white',
            text: 'quit',
            font: '24px monospace',
            size: {width: Grid.MAX_WIDTH / 2 - BUTTON_PADDING, height: 40},
            action: function () {
                sona.play('button');
                Arcadia.changeScene(PuzzleSelectScene);
            }
        });
        quitButton.position = {
            x: -quitButton.size.width / 2 - BUTTON_PADDING,
            y: -this.size.height / 2 + quitButton.size.height / 2 + this.VERTICAL_PADDING
        };
        this.add(quitButton);

        var resetButton = new Arcadia.Button({
            color: null,
            border: '2px white',
            text: 'reset',
            font: '24px monospace',
            size: {width: Grid.MAX_WIDTH / 2 - BUTTON_PADDING, height: 40},
            action: function () {
                sona.play('erase');

                self.grid.reset();
            }
        });
        resetButton.position = {
            x: resetButton.size.width / 2 + BUTTON_PADDING,
            y: -this.size.height / 2 + resetButton.size.height / 2 + this.VERTICAL_PADDING
        };
        this.add(resetButton);

        var areaLabelBackground = new Arcadia.Shape({
            color: null,
            border: '2px white',
            size: {width: Grid.MAX_WIDTH / 2 - BUTTON_PADDING, height: 80}
        });
        areaLabelBackground.position = {
            x: -areaLabelBackground.size.width / 2 - BUTTON_PADDING,
            y: resetButton.position.y + resetButton.size.height / 2 + areaLabelBackground.size.height / 2 + BUTTON_PADDING * 2
        };
        this.add(areaLabelBackground);

        this.areaLabel = new Arcadia.Label({
            color: 'white',
            text: 'Area\n--',
            font: '28px monospace'
        });
        areaLabelBackground.add(this.areaLabel);

        var timerLabelBackground = new Arcadia.Shape({
            color: null,
            border: '2px white',
            size: {width: Grid.MAX_WIDTH / 2 - BUTTON_PADDING, height: 80}
        });
        timerLabelBackground.position = {
            x: timerLabelBackground.size.width / 2 + BUTTON_PADDING,
            y: quitButton.position.y + quitButton.size.height / 2 + timerLabelBackground.size.height / 2 + BUTTON_PADDING * 2
        };
        this.add(timerLabelBackground);

        this.timerLabel = new Arcadia.Label({
            color: 'white',
            text: 'Time\n00:00',
            font: '28px monospace'
        });
        timerLabelBackground.add(this.timerLabel);

        if (this.showTutorial) {
            this.tutorialLabelBackground = new Arcadia.Shape({
                color: null,
                border: '2px white',
                size: {width: Grid.MAX_WIDTH / 1.5, height: 110},
                position: {x: 0, y: 230}
            });
            this.add(this.tutorialLabelBackground);

            this.tutorialLabel = new Arcadia.Label({
                color: 'white',
                text: 'Tutorial text goes here\nhow much text can\nfit in this box?\na lot apparently',
                font: '20px monospace'
            });
            this.tutorialLabelBackground.add(this.tutorialLabel);

            this.hint = new Square();
            this.hint.blink();
            this.add(this.hint);
        }

        this.completeBackground = new Arcadia.Shape({
            color: null,
            border: '2px white',
            size: {width: Grid.MAX_WIDTH / 1.5, height: Grid.MAX_HEIGHT / 1.5},
            position: {x: 0, y: this.size.height / 2 - Grid.MAX_HEIGHT / 2 - this.VERTICAL_PADDING},
            enablePointEvents: true
        });

        this.completeBackground.add(new Arcadia.Label({
            font: '36px monospace',
            text: 'complete!',
            position: {x: 0, y: -75}
        }));

        this.completeBackground.add(new Arcadia.Button({
            color: null,
            border: '2px white',
            font: '36px monospace',
            text: 'next >',
            padding: 10,
            action: function () {
                sona.play('button');

                var completedPuzzles = localStorage.getObject('completedPuzzles') || [];
                var incompletePuzzleIndex = completedPuzzles.indexOf(null);

                if (incompletePuzzleIndex === -1) {
                    Arcadia.changeScene(PuzzleSelectScene);
                } else if (Arcadia.isLocked() && incompletePuzzleIndex >= Arcadia.FREE_LEVEL_COUNT) {
                    Arcadia.changeScene(UnlockScene);
                } else {
                    Arcadia.changeScene(GameScene, {level: incompletePuzzleIndex});
                }
            }
        }));

        this.completeBackground.add(new Arcadia.Button({
            color: null,
            border: '2px white',
            font: '36px monospace',
            text: '< back',
            padding: 10,
            position: {x: 0, y: 75},
            action: function () {
                sona.play('button');
                Arcadia.changeScene(PuzzleSelectScene);
            }
        }));
    };

    root.GameScene = GameScene;
}(window));
/*jslint this, browser */
/*global window, Arcadia, sona, GameScene, UnlockScene, TitleScene, PUZZLES,
  Thumbnail */

(function (root) {
    'use strict';

    var PuzzleSelectScene;

    PuzzleSelectScene = function (options) {
        Arcadia.Scene.call(this, options);

        options = options || {};

        var self = this;

        Arcadia.cycleBackground();

        this.selectedPuzzle = parseInt(localStorage.getItem('selectedPuzzle'), 10) || options.puzzle || 0;
        this.perPage = 9;
        this.totalPages = Math.ceil(PUZZLES.length / this.perPage);
        this.currentPage = Math.floor(this.selectedPuzzle / this.perPage);
        this.completedPuzzles = localStorage.getObject('completedPuzzles') || [];
        while (this.completedPuzzles.length < PUZZLES.length) {
            this.completedPuzzles.push(null);
        }

        this.drawUi();
        this.updatePageLabel();

        // Create two "pages" of thumbnail previews
        this.thumbnails = [[], []];

        // Store the default coords of each thumbnail (used for resetting after animations, etc.)
        this.thumbnailPositions = [];

        this.thumbnails.forEach(function (page) {
            var thumbnail,
                thumbnailIndex,
                index,
                previewPadding = 10;

            while (page.length < self.perPage) {
                thumbnailIndex = page.length;
                index = self.currentPage * self.perPage + thumbnailIndex;

                self.thumbnailPositions[thumbnailIndex] = {
                    x: -(Thumbnail.SIZE + previewPadding) + (thumbnailIndex % 3) * (Thumbnail.SIZE + previewPadding),
                    y: -(Thumbnail.SIZE + previewPadding) + Math.floor(thumbnailIndex / 3) * (Thumbnail.SIZE + previewPadding)
                };

                thumbnail = new Thumbnail({
                    position: {
                        x: self.thumbnailPositions[thumbnailIndex].x,
                        y: self.thumbnailPositions[thumbnailIndex].y
                    }
                });

                thumbnail.drawPreview(index, self.completedPuzzles[index]);

                self.add(thumbnail);
                page.push(thumbnail);
            }
        });

        // Move second page offscreen
        this.thumbnails[1].forEach(function (thumbnail) {
            thumbnail.position = {
                x: thumbnail.position.x + self.size.width,
                y: thumbnail.position.y
            };
        });

        this.activeThumbnailPage = 0;

        if (this.currentPage === this.totalPages - 1) {
            this.nextButton.disabled = true;
            this.nextButton.alpha = 0.5;
        }

        if (this.currentPage === 0) {
            this.previousButton.disabled = true;
            this.previousButton.alpha = 0.5;
        }

        // Highlight the selected level thumbnail
        this.previousThumbnail = this.thumbnails[this.activeThumbnailPage][this.selectedPuzzle - this.currentPage * this.perPage];
        this.previousThumbnail.highlight();
    };

    PuzzleSelectScene.prototype = new Arcadia.Scene();

    PuzzleSelectScene.prototype.next = function () {
        var offset = -Arcadia.VIEWPORT_WIDTH,
            thumbnail,
            self = this;

        if (this.currentPage < this.totalPages - 1) {
            sona.play('button');
            this.nextButton.disabled = true;
            this.nextButton.alpha = 0.5;

            // Move (old) current page to the left
            this.thumbnails[this.activeThumbnailPage].forEach(function (shape, index) {
                var delay = Math.floor(index / 3) * PuzzleSelectScene.TRANSITION_DELAY;
                window.setTimeout(function () {
                    shape.tween('position', {x: shape.position.x + offset, y: shape.position.y}, PuzzleSelectScene.TRANSITION_DURATION, PuzzleSelectScene.TRANSITION_TYPE);
                }, delay);
            });

            // increment currentPage
            this.currentPage += 1;

            // Toggle this var between 0 and 1
            this.activeThumbnailPage = this.activeThumbnailPage === 1 ? 0 : 1;

            // Move (new) current page to the left
            this.thumbnails[this.activeThumbnailPage].forEach(function (shape, index) {
                var delay,
                    levelIndex;

                // Move offscreen to the right
                shape.position = {
                    x: self.thumbnailPositions[index].x - offset,
                    y: shape.position.y
                };

                levelIndex = self.currentPage * self.perPage + index;
                shape.drawPreview(levelIndex, self.completedPuzzles[levelIndex]);

                delay = Math.floor(index / 3) * PuzzleSelectScene.TRANSITION_DELAY + 100;

                window.setTimeout(function () {
                    shape.tween('position', {x: shape.position.x + offset, y: shape.position.y}, PuzzleSelectScene.TRANSITION_DURATION, PuzzleSelectScene.TRANSITION_TYPE);
                }, delay);
            });

            thumbnail = this.thumbnails[this.activeThumbnailPage][0];
            thumbnail.highlight();
            this.previousThumbnail.lowlight();
            this.previousThumbnail = thumbnail;
            this.selectedPuzzle = this.currentPage * this.perPage;
            this.updatePageLabel();
            localStorage.setItem('selectedPuzzle', this.selectedPuzzle);

            window.setTimeout(function () {
                if (self.currentPage < self.totalPages - 1) {
                    self.nextButton.disabled = false;
                    self.nextButton.alpha = 1;
                }
            }, PuzzleSelectScene.TOTAL_TRANSITION_DURATION);

            if (this.previousButton.alpha < 1) {
                this.previousButton.disabled = false;
                this.previousButton.alpha = 1;
            }
        }
    };

    PuzzleSelectScene.prototype.previous = function () {
        var offset = Arcadia.VIEWPORT_WIDTH,
            thumbnail,
            self = this;

        if (this.currentPage > 0) {
            sona.play('button');
            this.previousButton.disabled = true;
            this.previousButton.alpha = 0.5;

            // Move (old) current page to the right
            this.thumbnails[this.activeThumbnailPage].forEach(function (shape, index) {
                var delay = Math.floor((self.perPage - index - 1) / 3) * PuzzleSelectScene.TRANSITION_DELAY;
                window.setTimeout(function () {
                    shape.tween('position', {x: shape.position.x + offset, y: shape.position.y}, PuzzleSelectScene.TRANSITION_DURATION, PuzzleSelectScene.TRANSITION_TYPE);
                }, delay);
            });

            // decrement currentPage
            this.currentPage -= 1;

            // Toggle this var between 0 and 1
            this.activeThumbnailPage = this.activeThumbnailPage === 1 ? 0 : 1;

            // Move (new) current page to the right
            this.thumbnails[this.activeThumbnailPage].forEach(function (shape, index) {
                var delay,
                    levelIndex;

                // Move offscreen to the left
                shape.position = {
                    x: self.thumbnailPositions[index].x - offset,
                    y: shape.position.y
                };

                levelIndex = self.currentPage * self.perPage + index;
                shape.drawPreview(levelIndex, self.completedPuzzles[levelIndex]);

                delay = Math.floor((self.perPage - index - 1) / 3) * PuzzleSelectScene.TRANSITION_DELAY + 100;

                window.setTimeout(function () {
                    shape.tween('position', {x: shape.position.x + offset, y: shape.position.y}, PuzzleSelectScene.TRANSITION_DURATION, PuzzleSelectScene.TRANSITION_TYPE);
                }, delay);
            });

            thumbnail = this.thumbnails[this.activeThumbnailPage][0];
            thumbnail.highlight();
            this.previousThumbnail.lowlight();
            this.previousThumbnail = thumbnail;
            this.selectedPuzzle = this.currentPage * this.perPage;
            this.updatePageLabel();
            localStorage.setItem('selectedPuzzle', this.selectedPuzzle);

            window.setTimeout(function () {
                if (self.currentPage > 0) {
                    self.previousButton.disabled = false;
                    self.previousButton.alpha = 1;
                }
            }, PuzzleSelectScene.TOTAL_TRANSITION_DURATION);

            if (this.nextButton.alpha < 1) {
                this.nextButton.disabled = false;
                this.nextButton.alpha = 1;
            }
        }
    };

    PuzzleSelectScene.prototype.updatePageLabel = function () {
        this.pageLabel.text = 'Page ' + (this.currentPage + 1) + ' of ' + this.totalPages;
        this.difficultyLabel.text = 'Size: ' + PUZZLES[this.selectedPuzzle].size + 'x' + PUZZLES[this.selectedPuzzle].size;
        this.completedLabel.text = 'Completed? ' + (this.completedPuzzles[this.selectedPuzzle] ? '✓' : '✗');
    };

    PuzzleSelectScene.prototype.onPointEnd = function (points) {
        Arcadia.Scene.prototype.onPointEnd.call(this, points);
        var self = this,
            cursor = {
                size: {width: 1, height: 1},
                position: points[0]
            };

        // Determine if tap/click touched a thumbnail
        this.thumbnails[this.activeThumbnailPage].forEach(function (thumbnail, index) {
            if (thumbnail.collidesWith(cursor) && thumbnail.alpha === 1) {
                sona.play('button');

                self.previousThumbnail.lowlight();
                thumbnail.highlight();
                self.previousThumbnail = thumbnail;
                self.selectedPuzzle = self.currentPage * self.perPage + index;
                localStorage.setItem('selectedPuzzle', self.selectedPuzzle);
                self.updatePageLabel();
            }
        });
    };

    PuzzleSelectScene.prototype.drawUi = function () {
        var self = this;

        this.pageLabel = new Arcadia.Label({
            position: {x: 0, y: -145},
            font: '20px monospace'
        });
        this.add(this.pageLabel);

        this.difficultyLabel = new Arcadia.Label({
            position: {x: 0, y: 150},
            font: '24px monospace'
        });
        this.add(this.difficultyLabel);

        this.completedLabel = new Arcadia.Label({
            position: {x: 0, y: 180},
            font: '24px monospace'
        });
        this.add(this.completedLabel);

        var backButton = new Arcadia.Button({
            position: {x: -this.size.width / 2 + 65, y: -this.size.height / 2 + 25},
            size: {width: 120, height: 40},
            color: null,
            border: '2px white',
            text: '< title',
            font: '24px monospace',
            action: function () {
                sona.play('button');
                Arcadia.changeScene(TitleScene);
            }
        });
        this.add(backButton);

        // if (Arcadia.ENV.cordova && Arcadia.isLocked()) {
        var unlockButton = new Arcadia.Button({
            position: {x: this.size.width / 2 - 65, y: -this.size.height / 2 + 25},
            size: {width: 120, height: 40},
            color: null,
            border: '2px white',
            text: 'create',
            font: '24px monospace',
            action: function () {
                sona.play('button');
                Arcadia.changeScene(EditorScene);
            }
        });
        this.add(unlockButton);
        // }

        var title = new Arcadia.Label({
            text: 'choose\npuzzle',
            font: '48px monospace',
            position: {x: 0, y: -this.size.height / 2 + 110}
        });
        this.add(title);

        var playButton = new Arcadia.Button({
            position: {x: 0, y: this.size.height / 2 - 100},
            size: {width: 180, height: 50},
            color: null,
            border: '2px white',
            text: 'play',
            font: '36px monospace',
            action: function () {
                sona.play('button');
                if (Arcadia.isLocked() && self.selectedPuzzle >= Arcadia.FREE_LEVEL_COUNT) {
                    Arcadia.changeScene(UnlockScene);
                } else {
                    Arcadia.changeScene(GameScene, {level: self.selectedPuzzle});
                }
            }
        });
        this.add(playButton);

        var editButton = new Arcadia.Button({
            position: {x: 0, y: playButton.position.y + 60},
            size: {width: 180, height: 50},
            color: null,
            border: '2px white',
            text: 'edit',
            font: '36px monospace',
            action: function () {
                sona.play('button');
                Arcadia.changeScene(EditorScene, {puzzleIndex: self.selectedPuzzle});
            }
        });
        this.add(editButton);

        // Create previous/next buttons
        this.previousButton = new Arcadia.Button({
            position: {x: -this.size.width / 2 + 30, y: 0},
            size: {width: 50, height: 50},
            border: '2px white',
            color: null,
            vertices: 0,
            label: new Arcadia.Label({
                text: '<',
                font: '40px monospace'
            }),
            action: function () {
                self.previous();
            }
        });

        this.nextButton = new Arcadia.Button({
            position: {x: this.size.width / 2 - 30, y: 0},
            size: {width: 50, height: 50},
            border: '2px white',
            color: null,
            vertices: 0,
            label: new Arcadia.Label({
                text: '>',
                font: '40px monospace'
            }),
            action: function () {
                self.next();
            }
        });

        this.add(this.previousButton);
        this.add(this.nextButton);
    };

    PuzzleSelectScene.TRANSITION_TYPE = 'cubicInOut';
    PuzzleSelectScene.TRANSITION_DURATION = 400;
    PuzzleSelectScene.TRANSITION_DELAY = 100;
    PuzzleSelectScene.TOTAL_TRANSITION_DURATION = 600;

    root.PuzzleSelectScene = PuzzleSelectScene;
}(window));
/*jslint this, browser */
/*global Arcadia, window, TitleScene */

(function (root) {
    'use strict';

    var RulesScene = function () {
        Arcadia.Scene.apply(this);

        Arcadia.cycleBackground();

        var text = [
            'Tap + drag on the puzzle\n',
            'grid to draw. Each number\n',
            'on the grid is a clue; the\n',
            'number represents the size\n',
            'of the rectangle that\n',
            'overlaps it. For example,\n',
            'a clue of "9" means that\n',
            'you need to draw a 3x3\n',
            'square on top of that\n',
            'clue. The trick is to draw\n',
            'each square and rectangle\n',
            'so that there\'s no wasted\n',
            'space on the grid. You\n',
            'can\'t overlap squares,\n',
            'either. Fortunately,\n',
            'there\'s no time limit,\n',
            'and you can always try\n',
            'again if you make a\n',
            'mistake.'
        ];

        text = `The goal of Akari is to
"light up" the entire
puzzle grid. A light
shines in four
directions, and you
can place as many as
you like. The only
limitation is the
numbered squares in the
grid. A square with a
"3" can only have three
lights in its adjacent
north, south, east, or
west spaces. And a
light can't shine on
another light.`;
// ********************

        var titleLabel = new Arcadia.Label({
            text: 'rules',
            font: '64px monospace',
            position: {x: 0, y: -this.size.height / 2 + 110}
        });
        this.add(titleLabel);

        var backButton = new Arcadia.Button({
            position: {x: -this.size.width / 2 + 65, y: -this.size.height / 2 + 25},
            size: {width: 120, height: 40},
            color: null,
            border: '2px white',
            text: '< title',
            font: '24px monospace',
            action: function () {
                window.sona.play('button');
                Arcadia.changeScene(TitleScene);
            }
        });
        this.add(backButton);

        var detailLabel = new Arcadia.Label({
            // text: text.join(''),
            text: text,
            alignment: 'left',
            font: '24px monospace',
            position: {x: 0, y: 75}
        });
        this.add(detailLabel);
    };

    RulesScene.prototype = new Arcadia.Scene();

    root.RulesScene = RulesScene;
}(window));
/*jslint this, browser */
/*global Arcadia, window, PUZZLES, RulesScene, PuzzleSelectScene, UnlockScene, GameScene */

'use strict';

var TitleScene = function () {
    Arcadia.Scene.apply(this);

    Arcadia.cycleBackground();

    var BUTTON_MARGIN = 10;

    var titleLabel = new Arcadia.Label({
        text: 'akari\nmadness',
        font: '64px monospace',
        position: {x: 0, y: -100}
    });

    this.add(titleLabel);

    var playButton = new Arcadia.Button({
        position: {x: 0, y: 80},
        size: {width: 180, height: 50},
        color: null,
        border: '2px white',
        text: 'play',
        font: '36px monospace',
        action: function () {
            window.sona.play('button');

            var completedPuzzles = localStorage.getObject('completedPuzzles') || [];
            while (completedPuzzles.length < PUZZLES.length) {
                completedPuzzles.push(null);
            }
            var incompletePuzzleIndex = completedPuzzles.indexOf(null);

            // TOOO: Extract this code from here & game scene
            if (incompletePuzzleIndex === -1) {
                Arcadia.changeScene(PuzzleSelectScene);
            } else if (Arcadia.isLocked() && incompletePuzzleIndex >= Arcadia.FREE_LEVEL_COUNT) {
                Arcadia.changeScene(UnlockScene);
            } else {
                Arcadia.changeScene(GameScene, {level: incompletePuzzleIndex});
            }
        }
    });
    this.add(playButton);

    var rulesButton = new Arcadia.Button({
        position: {x: 0, y: playButton.position.y + playButton.size.height + BUTTON_MARGIN},
        size: {width: 180, height: 50},
        color: null,
        border: '2px white',
        text: 'rules',
        font: '36px monospace',
        action: function () {
            window.sona.play('button');
            Arcadia.changeScene(RulesScene);
        }
    });
    this.add(rulesButton);

    var aboutButton = new Arcadia.Button({
        position: {x: 0, y: rulesButton.position.y + rulesButton.size.height + BUTTON_MARGIN},
        size: {width: 180, height: 50},
        color: null,
        border: '2px white',
        text: 'about',
        font: '36px monospace',
        action: function () {
            sona.play('button');
            Arcadia.changeScene(AboutScene);
        }
    });
    this.add(aboutButton);

    var editorButton = new Arcadia.Button({
        position: {x: 0, y: aboutButton.position.y + aboutButton.size.height + BUTTON_MARGIN},
        size: {width: 180, height: 50},
        color: null,
        border: '2px white',
        text: 'editor',
        font: '36px monospace',
        action: function () {
            sona.play('button');
            Arcadia.changeScene(EditorScene);
        }
    });
    this.add(editorButton);
};

TitleScene.prototype = new Arcadia.Scene();
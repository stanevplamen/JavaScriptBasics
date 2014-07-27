var CanvasShape = (function () {

    var ctx;
    function CanvasShape(selector, args) {
        this.stroke = args.stroke || 'blue';
        this.line = args.line || 3;
        this.fill = args.fill || 'orange';

        var container = document.querySelector(selector);
        if (!container) { throw new Error('Container selector is not defined!'); }

        var canvas = document.createElement('canvas');
        canvas.setAttribute('width', args.width || 1000);
        canvas.setAttribute('height', args.height || 500);
        container.appendChild(canvas);
        ctx = canvas.getContext('2d');
    }

    CanvasShape.prototype.drawLine = function (startX, startY, endX, endY) {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.closePath();
        ctx.lineWidth = this.line;
        ctx.strokeStyle = this.stroke;
        ctx.stroke();
    };

    CanvasShape.prototype.drawRect = function (x, y, width, height) {
        ctx.fillStyle = this.fill;
        ctx.lineWidth = this.line;
        ctx.strokeStyle = this.stroke;
        ctx.fillRect(x, y, width, height);
        ctx.strokeRect(x, y, width, height);
    };

    CanvasShape.prototype.drawCircle = function (x, y, radius) {
        ctx.beginPath();
        ctx.fillStyle = this.fill;
        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = this.line;
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    };

    return CanvasShape;
}());
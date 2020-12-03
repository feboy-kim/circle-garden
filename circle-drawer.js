'use strict';
const vGradient = ctx => {
    const gd = ctx.createLinearGradient(60, 10, 60, 110);
    gd.addColorStop(0, 'rgb(65, 105, 225)');
    gd.addColorStop(0.7, 'rgba(65, 105, 225, 0)');
    gd.addColorStop(1, 'rgb(65, 105, 225)');
    return gd;
};
const hGradient = ctx => {
    const gd = ctx.createLinearGradient(10, 60, 110, 60);
    gd.addColorStop(0, 'rgba(65, 105, 225, 0.1)');
    gd.addColorStop(0.5, 'rgba(65, 105, 225, 0.9)');
    gd.addColorStop(1, 'rgba(65, 105, 225, 0.1)');
    return gd;
};
const drawCircle = (ctx, rad) => {
    ctx.beginPath();
    ctx.arc(60, 60, rad, 0, Math.PI * 2);
    ctx.stroke();
};
const drawLine = ctx => {
    ctx.beginPath();
    ctx.moveTo(10, 76);
    ctx.lineTo(110, 76);
    ctx.stroke();
};

const drawer = {
    circleLine01: canvas => {
        if (canvas && canvas.getContext) {
            const ctx = canvas.getContext('2d');
            const vgd = vGradient(ctx), hgd = hGradient(ctx);

            ctx.lineWidth = 6;
            ctx.strokeStyle = vgd;
            drawCircle(ctx, 40);

            ctx.strokeStyle = hgd;
            drawLine(ctx);

            ctx.beginPath();
            ctx.fillStyle = vgd;
            ctx.font = 'bold 16px sans-serif';
            ctx.textBaseline = 'middle';
            for (let i = 0; i < 3; i++) {
                ctx.fillText((i+1).toString(), 38 + i * 16, 40);
            }
            for (let i = 0; i < 2; i++) {
                ctx.fillText((i+4).toString(), 38 + i * 16, 56);
            }
            ctx.fillText('\u2714', 68, 56);
        }
    },
    circleLine02: canvas => {
        if (canvas && canvas.getContext) {
            const ctx = canvas.getContext('2d');
            const vgd = vGradient(ctx), hgd = hGradient(ctx);

            ctx.lineWidth = 6;
            ctx.strokeStyle = vgd;
            drawCircle(ctx, 40);

            ctx.strokeStyle = hgd;
            drawLine(ctx);

            ctx.beginPath();
            ctx.fillStyle = vgd;
            ctx.font = 'bold 18px sans-serif';
            ctx.textBaseline = 'middle';
            for (let i = 0; i < 3; i++) {
                ctx.fillText(String.fromCharCode(97 + i), 38 + i * 16, 40);
            }
            for (let i = 0; i < 2; i++) {
                ctx.fillText(String.fromCharCode(100 + i), 38 + i * 16, 56);
            }
            ctx.fillText('\u2605', 68, 56);
        }
    },
    circleLine03: canvas => {
        if (canvas && canvas.getContext) {
            const ctx = canvas.getContext('2d');
            const vgd = vGradient(ctx), hgd = hGradient(ctx);

            ctx.lineWidth = 6;
            ctx.strokeStyle = vgd;
            drawCircle(ctx, 40);

            ctx.strokeStyle = hgd;
            drawLine(ctx);

            // ctx.beginPath();
            // ctx.moveTo(36, 44);
            // ctx.lineTo(84, 44);
            // ctx.moveTo(36, 60);
            // ctx.lineTo(84, 60);
            // ctx.moveTo(10, 76);
            // ctx.lineTo(110, 76);
            // ctx.stroke();

            // ctx.strokeStyle = vGradient;
            // ctx.beginPath();
            // ctx.arc(60, 60, 40, 0, Math.PI * 2);
            // ctx.stroke();
        }
    }

}

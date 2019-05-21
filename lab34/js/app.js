
var rows = 12;
var columns = 16;
var cells;
var mas;
var qj;
var pi;
var N = 3;
var C1 = 100; // Posit
var C2 = 150; // Auto
var C3 = 50; // Ticket
var n1 = 5; // Empty to move
var n2 = 5; // When ticket
var rmas;
var alpha;

$(function () {
    init();
    calc();
});

function init() {
    $('#C1').val(C1);
    $('#C2').val(C2);
    $('#C3').val(C3);
    $('#n1').val(n1);
    $('#n2').val(n2);
    drwTable();
}

function calc() {
    C1 = $('#C1').val();
    C2 = $('#C2').val();
    C3 = $('#C3').val();
    n1 = $('#n1').val();
    n2 = $('#n2').val();

    drwTable();
    minMax();
    laplas();
    savage();
    gurviz();
    mult();

    bayesLaplas();
    hodgeLeman();
    germayer();
    NVI();
}

var TD = (cont) => `<td>${cont}</td>`;
var TH = (cont) => `<th>${cont}</th>`;
var TR = (cont) => `<tr><td>${cont}</td></tr>`;

function drwTable() {
    var header = $('#matrix thead');
    $('#matrix tbody').html('');
    header.html('');
    var matrix = new Array();
    for (var i = 0; i < 11; ++i)
        matrix[i] = new Array(12);

    getMas();

    header.append(TH(''));

    for (var i = 0; i < 11; ++i) {
        var tbl = $('#matrix');
        var html = "<tr>";
        matrix[i][0] = (3 + i);
        header.append(TH(matrix[i][0]));
        html += TD(matrix[i][0]);

        for (var j = 1; j < 12; ++j) {
            matrix[i][j] = cells[i + 1][j];
            html += TD(matrix[i][j]);
        }
        html += "</tr>"

        tbl.append(html);
    }
    $('#res').removeClass('hidden');
}

function getMas() {

    mas = new Array(11);
    for (var i = 0; i < 11; ++i)
        mas[i] = new Array(11);
    cells = new Array(12);
    for (var i = 0; i < 12; ++i)
        cells[i] = new Array(16);
    pi = new Array(11);
    qj = new Array(11);
    rmas = new Array(11);
    for (var i = 0; i < 11; ++i)
        rmas[i] = new Array(11);
    alpha = 0.25;

    for (var i = 0; i < 11; ++i) {
        for (var j = 0; j < 11; ++j) {

            mas[i][j] = (i - j >= 0 && i - j <= n1 ? (j + N) * C2 - (i + N) * C1 :
                (i - j > n1 ? (j + N) * C2 - (i + N) * C1 + (i - j - n1) * C2 :
                    (j - i < n2 ? (i + N) * (C2 - C1) : (i + N) * (C2 - C1) - (j - i - n2) * C3)));;
            cells[i + 1][j + 1] = (mas[i][j]);
        }
        qj[i] = (12 - (i + 1)) * (i + 1) / 268.0;
        pi[i] = (1.0 - 0.01 * (N + (i + 1)));
    }
}

function minMax() {
    var n;
    for (n = 0; n < 11; ++n) {
        var n2 = 25000;
        for (var i = 0; i < 11; ++i) {
            if (mas[n][i] >= n2) continue;
            n2 = mas[n][i];
        }
        cells[n + 1][12] = n2;
    }
    var f = -25000.0;
    for (n = 0; n < 11; ++n) {
        if (!(cells[n + 1][12] > f)) continue;
        f = cells[n + 1][12];
    }
    for (n = 0; n < 11; ++n) {
        if (cells[n + 1][12] != f) continue;
        $('#minmax').val(n + N);
    }
}

function laplas() {
    var n;
    for (n = 0; n < 11; ++n) {
        var f = 0.0;
        for (var i = 0; i < 11; ++i) {
            f += mas[n][i];
        }
        cells[n + 1][13] = (f / 11.0);
    }
    var f = -25000.0;
    var bl = false;
    for (n = 0; n < 11; ++n) {
        if (!(cells[n + 1][13] > f)) continue;
        f = cells[n + 1][13];
    }
    for (n = 0; n < 11; ++n) {
        if (!(Math.abs(cells[n + 1][13] - f) < 1.0E-4)) continue;
        $('#laplas').val(n + N);
    }
}

function savage() {
    var n;
    var n2;
    var n3;
    for (n2 = 0; n2 < 11; ++n2) {
        n3 = -25000;
        for (n = 0; n < 11; ++n) {
            if (mas[n][n2] <= n3) continue;
            n3 = mas[n][n2];
        }
        for (n = 0; n < 11; ++n) {
            rmas[n][n2] = n3 - mas[n][n2];
        }
    }
    for (n = 0; n < 11; ++n) {
        n3 = -25000;
        for (n2 = 0; n2 < 11; ++n2) {
            if (rmas[n][n2] <= n3) continue;
            n3 = rmas[n][n2];
        }
        cells[n + 1][14] = (n3);
    }
    var f = 25000.0;
    for (n = 0; n < 11; ++n) {
        if (!(cells[n + 1][14] < f)) continue;
        f = cells[n + 1][14];
    }
    for (n = 0; n < 11; ++n) {
        if (cells[n + 1][14] != f) continue;
        $('#savage').val(n + N);
        return;
    }
}

function gurviz() {
    var f;
    var n;
    for (n = 0; n < 11; ++n) {
        f = -25000.0;
        var f2 = 25000.0;
        for (var i = 0; i < 11; ++i) {
            if (mas[n][i] < f2) {
                f2 = mas[n][i];
            }
            if (!(mas[n][i] > f)) continue;
            f = mas[n][i];
        }
        cells[n + 1][15] = (alpha * f + (1.0 - alpha) * f2);
    }
    f = -25000.0;
    for (n = 0; n < 11; ++n) {
        if (!(cells[n + 1][15] > f)) continue;
        f = cells[n + 1][15];
    }
    for (n = 0; n < 11; ++n) {
        if (cells[n + 1][15] != f) continue;
        $('#gurviz').val(n + N);
    }
}

function mult() {
    var n;
    var n2;
    var arrn = new Array(11);
    var bl = false;
    block0: for (n = 0; n < 11; ++n) {
        for (n2 = 0; n2 < 11; ++n2) {
            if (mas[n][n2] > 0) continue;
            bl = true;
            continue block0;
        }
    }
    var n3 = 0;
    bl = true;
    if (true) {
        var n4 = 25000;
        for (n = 0; n < 11; ++n) {
            for (n2 = 0; n2 < 11; ++n2) {
                if (mas[n][n2] >= n4) continue;
                n4 = mas[n][n2];
            }
        }
        n3 = Math.abs(n4) + 1;
    }
    for (n = 0; n < 11; ++n) {
        var n5 = 1;
        for (n2 = 0; n2 < 11; ++n2) {
            n5 *= mas[n][n2] + n3;
        }
        arrn[n] = n5;
    }
    var n6 = -25000;
    for (n = 0; n < 11; ++n) {
        if (arrn[n] <= n6) continue;
        n6 = arrn[n];
    }
    for (n = 0; n < 11; ++n) {
        if (arrn[n] != n6) continue;
        $('#mult').val(n + N);
    }
}

function bayesLaplas() {
    var n;
    for (n = 0; n < 11; ++n) {
        var f = 0.0;
        for (var i = 0; i < 11; ++i) {
            f += mas[n][i] * pi[n] * qj[i];
        }
        cells[n + 1][12] = (f);
    }
    var f = -25000.0;
    for (n = 0; n < 11; ++n) {
        if (!(cells[n + 1][12] > f)) continue;
        f = cells[n + 1][12];
    }
    for (n = 0; n < 11; ++n) {
        if (cells[n + 1][12] != f) continue;
        $('#bayesLaplas').val(n + N);
    }
}

function hodgeLeman() {
    var n;
    for (n = 0; n < 11; ++n) {
        var f = 0.0;
        var f2 = 25000.0;
        for (var i = 0; i < 11; ++i) {
            if (mas[n][i] < f2) {
                f2 = mas[n][i];
            }
            f += mas[n][i] * pi[n] * qj[i];
        }
        cells[n + 1][13] = (alpha * f + (1.0 - alpha) * f2);
    }
    var f = -25000.0;
    for (n = 0; n < 11; ++n) {
        if (!(cells[n + 1][13] > f)) continue;
        f = cells[n + 1][13];
    }
    for (n = 0; n < 11; ++n) {
        if (cells[n + 1][13] != f) continue;
        $('#hodgeLeman').val(n + N);

    }
}

function germayer() {
    var n;
    var f;
    var n2;
    var bl = false;
    for (n2 = 0; n2 < 11; ++n2) {
        for (n = 0; n < 11; ++n) {
            if (mas[n2][n] >= 0) continue;
            bl = true;
            continue;
        }
    }
    if (bl) {
        for (n2 = 0; n2 < 11; ++n2) {
            f = -25000.0;
            for (n = 0; n < 11; ++n) {
                if (!(mas[n2][n] * pi[n2] / qj[n] > f)) continue;
                f = mas[n2][n] * pi[n2] / qj[n];
            }
            cells[n2 + 1][14] = (f);
        }
    } else {
        for (n2 = 0; n2 < 11; ++n2) {
            f = -25000.0;
            for (n = 0; n < 11; ++n) {
                if (!(mas[n2][n] * pi[n2] * qj[n] > f)) continue;
                f = mas[n2][n] * pi[n2] * qj[n];
            }
            cells[n2 + 1][14] = (f);
        }
    }
    var f2 = 25000.0;
    for (n2 = 0; n2 < 11; ++n2) {
        if (!(cells[n2 + 1][14] < f2)) continue;
        f2 = cells[n2 + 1][14];
    }
    for (n2 = 0; n2 < 11; ++n2) {
        if (cells[n2 + 1][14] != f2) continue;
        $('#germayer').val(n + N);
    }
}

function NVI() {
    var n;
    for (n = 0; n < 11; ++n) {
        var f = 0.0;
        for (var i = 0; i < 11; ++i) {
            f += pi[n] * qj[i];
        }
        cells[n + 1][15] = (f);
    }
    var f = -25000.0;
    for (n = 0; n < 11; ++n) {
        if (!(cells[n + 1][15] > f)) continue;
        f = cells[n + 1][15];
    }
    for (n = 0; n < 11; ++n) {
        if (cells[n + 1][15] != f) continue;
        $('#NVI').val(n + N);
    }
}

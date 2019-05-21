var log = console.log;
var dx;
var nums;
var cells;
var mas;
var rmas;
var work;
var Table;
var Data;
var Alfa;
var Beta;
var F0;

var headers;

var TD = (cont) => `<td>${cont}</td>`;
var TH = (cont) => `<th>${cont}</th>`;
var TR = () => `<tr></tr>`;

init();

function init() {
    getData();
    var inputCells = $('.dtInput');
    inputCells.each((i, e) => $(e).val(Alfa[i]));

    setCells(Table);

    getNorm();

    //additive();
    //multiple();
    //cobbDuglas();
    //chastn();
    //ideal();
    //paretto();
    //setCells(Table);
}

function setCells(arrf) {
    //$('#data thead tr').html('');
    $('#data tbody').html('');

    for (var i = 0; i < 9; ++i) {
        for (var j = 0; j < 6; ++j) {
            cells[i + 2][j + 2] = arrf[i][j].toFixed(3);
        }
    }

    var f0 = new Array(9);
    for (var n2 = 0; n2 < 9; ++n2)
        f0[nums[n2] - 1] = nums[n2] !== undefined && nums[n2] > 0 ? work[n2].toFixed(8) : "";

    // for (var h of headers) {
    //     $('#data thead tr').append(TH(h));
    // }

    for (var i = 0; i < arrf.length; i++) {
        $('#data tbody').append(TR());
        var last = $('#data tbody tr:last');
        last.append(TD(cells[i + 2][0]));
        last.append(TD(cells[i + 2][1]));

        last.append(TD(cells[i + 2][2]));
        last.append(TD(cells[i + 2][3]));
        last.append(TD(cells[i + 2][4]));
        last.append(TD(cells[i + 2][5]));
        last.append(TD(cells[i + 2][6]));
        last.append(TD(cells[i + 2][7]));
        last.append(TD(f0[i] !== undefined ? f0[i] : ""));
    }

    sortTable();
}

function sortTable() {
    $('#data tbody tr').sort(function (a, b) {
        return +$(b).find('td:last').text() > +$(a).find('td:last').text();
    }).appendTo('#data tbody');
}

function resortTable() {
    $('#data tbody tr').sort(function (a, b) {
        return +$(b).find('td:last').text() < +$(a).find('td:last').text();
    }).appendTo('#data tbody');
}

function getNorm() {
    for (var i = 0; i < 6; ++i) {
        var n;
        var f = Table[0][i];
        for (n = 1; n < 9; ++n) {
            if (!(Table[n][i] > f))
                continue;
            f = Table[n][i];
        }
        for (n = 0; n < 9; ++n) {
            Table[n][i] = (Table[n][i] / f);
        }
    }
}

function getData() {
    var n;
    cells = new Array(11);
    for (var i = 0; i < 11; ++i)
        cells[i] = new Array(8);

    mas = new Array(11);
    for (var i = 0; i < 11; ++i)
        mas[i] = new Array(11);

    rmas = new Array(11);
    for (var i = 0; i < 11; ++i)
        rmas[i] = new Array(11);

    Table = new Array(9);
    for (var i = 0; i < 9; ++i)
        Table[i] = new Array(6);

    Data = new Array(9);
    for (var i = 0; i < 9; ++i)
        Data[i] = new Array(6);

    Alfa = new Array(6);
    Beta = new Array(6);
    work = new Array(9);
    nums = new Array(9);
    F0 = new Array(9);

    headers = ["Модель", "Цена", "Изображение", "Оснащение", "Эргономичность", "Звук", "Энергопотр", "Диагональ", "F"];

    cells[2][0] = ("1. LG 55UGB870v");
    cells[3][0] = ("2. Panas TX-55CRW854");
    cells[4][0] = ("3. LG 55EG960v");
    cells[5][0] = ("4. Sony KD-55X8505C");
    cells[6][0] = ("5. Samsung UE55JS85D0");
    cells[7][0] = ("6. LG 49UF8519");
    cells[8][0] = ("7. Samsung UE48JS90D0");
    cells[9][0] = ("8. Philips 55PUS7150");
    cells[10][0] = ("9. Panasonic TX-55CRW734");
    cells[2][1] = ("109 500");
    cells[3][1] = ("210 000");
    cells[4][1] = ("230 000");
    cells[5][1] = ("109 500");
    cells[6][1] = ("139 000");
    cells[7][1] = ("69 000");
    cells[8][1] = ("115 500");
    cells[9][1] = ("78 000");
    cells[10][1] = ("109 000");

    cells[0][0] = ("aj");

    Table[0][0] = 99.0;
    Table[0][1] = 91.0;
    Table[0][2] = 100.0;
    Table[0][3] = 90.0;
    Table[0][4] = 99.0;
    Table[0][5] = 55.0;
    //1700
    Table[1][0] = 97.0;
    Table[1][1] = 94.0;
    Table[1][2] = 94.0;
    Table[1][3] = 100.0;
    Table[1][4] = 73.0;
    Table[1][5] = 55.0;
    //2600
    Table[2][0] = 100.0;
    Table[2][1] = 86.0;
    Table[2][2] = 100.0;
    Table[2][3] = 80.0;
    Table[2][4] = 68.0;
    Table[2][5] = 55.0;
    //1600
    Table[3][0] = 93.0;
    Table[3][1] = 100.0;
    Table[3][2] = 78.0;
    Table[3][3] = 88.0;
    Table[3][4] = 96.0;
    Table[3][5] = 55.0;
    //9800X
    Table[4][0] = 91.0;
    Table[4][1] = 97.0;
    Table[4][2] = 79.0;
    Table[4][3] = 90.0;
    Table[4][4] = 94.0;
    Table[4][5] = 55.0;
    //9700
    Table[5][0] = 97.0;
    Table[5][1] = 82.0;
    Table[5][2] = 73.0;
    Table[5][3] = 95.0;
    Table[5][4] = 81.0;
    Table[5][5] = 49.0;
    //8700
    Table[6][0] = 91.0;
    Table[6][1] = 98.0;
    Table[6][2] = 79.0;
    Table[6][3] = 59.0;
    Table[6][4] = 72.0;
    Table[6][5] = 48.0;
    //8600
    Table[7][0] = 88.0;
    Table[7][1] = 90.0;
    Table[7][2] = 85.0;
    Table[7][3] = 54.0;
    Table[7][4] = 90.0;
    Table[7][5] = 55.0;
    //8400
    Table[8][0] = 92.0;
    Table[8][1] = 75.0;
    Table[8][2] = 83.0;
    Table[8][3] = 76.0;
    Table[8][4] = 93.0;
    Table[8][5] = 55.0;

    for (var i = 0; i < 9; ++i) {
        for (n = 0; n < 6; ++n) {
            this.Data[i][n] = this.Table[i][n];
        }
    }
    Alfa[0] = 0.5;
    Beta[0] = 0.5;
    Alfa[1] = 0.25;
    Beta[1] = 0.25;
    Alfa[2] = 0.15;
    Beta[2] = 0.15;
    Alfa[3] = 0.05;
    Beta[3] = 0.05;
    Alfa[4] = 0.05;
    Beta[4] = 0.05;
    Alfa[5] = 0.05;
    Beta[5] = 0.05;

    for (n = 0; n < 6; ++n) {
        cells[0][n + 2] = "" + (Alfa[n]);
    }
}

function additive() {
    var n;
    var n2;
    for (n2 = 0; n2 < 9; ++n2) {
        nums[n2] = n2 + 1;
    }
    for (n2 = 0; n2 < 9; ++n2) {
        work[n2] = 0.0;
        for (n = 0; n < 6; ++n) {
            work[n2] = work[n2] + Alfa[n] * Table[n2][n];
        }
    }
    for (n2 = 0; n2 < 9; ++n2) {
        for (n = n2 + 1; n < 9; ++n) {
            if (!(work[n] > work[n2]))
                continue;
            var n3 = nums[n2];
            nums[n2] = nums[n];
            nums[n] = n3;
            var f = work[n2];
            work[n2] = work[n];
            work[n] = f;
        }
    }
}

function multipl() {
    var n;
    var n2;
    for (n2 = 0; n2 < 9; ++n2) {
        nums[n2] = n2 + 1;
    }
    for (n2 = 0; n2 < 9; ++n2) {
        work[n2] = 1.0;
        for (n = 0; n < 6; ++n) {
            work[n2] = work[n2] * Alfa[n] * Table[n2][n];
        }
    }
    for (n2 = 0; n2 < 9; ++n2) {
        for (n = n2 + 1; n < 9; ++n) {
            if (!(work[n] > work[n2]))
                continue;
            var n3 = nums[n2];
            nums[n2] = nums[n];
            nums[n] = n3;
            var f = work[n2];
            work[n2] = work[n];
            work[n] = f;
        }
    }
    for (n2 = 0; n2 < 9; ++n2) {
        work[n2] *= 100000;
    }
}

function cobbDuglas() {
    var n;
    var n2;
    for (n2 = 0; n2 < 9; ++n2) {
        nums[n2] = n2 + 1;
    }
    for (n2 = 0; n2 < 9; ++n2) {
        work[n2] = 1.0;
        for (n = 0; n < 6; ++n) {
            work[n2] = work[n2] * Math.exp(Beta[n] * Math.log(Alfa[n] * Table[n2][n]));
        }
    }
    for (n2 = 0; n2 < 9; ++n2) {
        for (n = n2 + 1; n < 9; ++n) {
            if (!(work[n] > work[n2]))
                continue;
            var n3 = nums[n2];
            nums[n2] = nums[n];
            nums[n] = n3;
            var f = work[n2];
            work[n2] = work[n];
            work[n] = f;
        }
    }
}

function chastn()
{
    var main = +$('#mainInput').val();
    log(main);
    for (var i = 0; i < 9; i++) {
        work[i] = Data[i][main - 1];
        nums[i] = i + 1;
        for (var j = 0; j < 6; j++) {
            if (j != main - 1) work[i] += Table[i][j] * Alfa[j];
        }
    }
}

function ideal() {
    var n;
    var n2;
    // this.lab_id.setText("");
    // this.lab_id.setText("\u041a\u0440\u0438\u0442\u0435\u0440\u0438\u0439 \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0438 - ");
    var arrf = new Array(9);
    for (n2 = 0; n2 < 9; ++n2) {
        this.nums[n2] = n2 + 1;
    }
    for (n = 0; n < 6; ++n) {
        arrf[n] = -1.0;
    }
    for (n2 = 0; n2 < 9; ++n2) {
        for (n = 0; n < 6; ++n) {
            if (!(arrf[n] < this.Table[n2][n]))
                continue;
            arrf[n] = this.Table[n2][n];
        }
    }
    for (n2 = 0; n2 < 9; ++n2) {
        this.work[n2] = 0.0;
        for (n = 0; n < 6; ++n) {
            this.work[n2] = this.work[n2] + this.Alfa[n] * (this.Table[n2][n] - arrf[n]) * (this.Table[n2][n] - arrf[n]);
        }
    }
    for (n2 = 0; n2 < 9; ++n2) {
        this.work[n2] = Math.sqrt(this.work[n2]);
    }
    for (n2 = 0; n2 < 9; ++n2) {
        for (n = n2 + 1; n < 9; ++n) {
            if (!(this.work[n] < this.work[n2]))
                continue;
            var n3 = this.nums[n2];
            this.nums[n2] = this.nums[n];
            this.nums[n] = n3;
            var f = this.work[n2];
            this.work[n2] = this.work[n];
            this.work[n] = f;
        }
    }
}

function paretto() {
    var n;
    var n2;
    var arrn = new Array(9);
    for (var i = 0; i < 9; ++i)
        arrn[i] = new Array(9);

    var last = 9;
    var sums = new Array(9);

    for (var i = 0; i < 9; ++i) {
        sums[i] = 0;
        for (var j = 0; j < 6; ++j) {
            sums[i] += Table[i][j];
        }
    }

    var outLabel = "";
    var res = 0;
    var count = 0;
    while (count < 9) {
        for (var i = 0; i < last; ++i) {
            if (sums[i] < -9999)
                continue;
            for (var j = 0; j < last; ++j) {
                if (sums[j] < -9999)
                    continue;
                if (Math.ceil(sums[i] * 100) > Math.ceil(sums[j] * 100))
                    arrn[i][j] = 1;
                else
                    arrn[i][j] = 0;
            }
        }

        for (var i = 0; i < last; ++i) {
            if (sums[i] < -9999)
                continue;
            for (var j = 0; j < last; ++j) {
                if (sums[j] < -9999)
                    continue;
                res += arrn[j][i];
            }
            if (res == 0) {
                outLabel = " " + (i + 1) + outLabel;
                sums[i] = -99999;
                count++;
            }
            res = 0;
        }
        outLabel = "  / " + outLabel;
    }
    outLabel = " Ranges of Paretto: " + outLabel;

    $('#paretto').html(outLabel);
}

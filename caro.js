


let DrawCaro = function (rows,cols) {
    
    this.rows=rows;
    this.cols=cols;
    this.drawTable= function () {
        let table="<table style='text-align: center; height: 200px; width: 200px;position: absolute;border: 1px black' cellspacing='0' cellpadding='0'>";
            for (let i=0;i<this.rows;i++){
                table+="<tr>";
                for (let j=0;j<this.cols;j++){
                    table+="<td onclick='fillCell(this)'  align='center' ></td>";
                }
                table+="</tr>";
            }
        table+="</table>";
            document.getElementById("caro").innerHTML=table;
    }

}

let caroField=new DrawCaro(20,20);
caroField.drawTable();

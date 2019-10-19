var appProducs =function () {
    this.listProducts=[];
    this.setListProduct=function () {
        sessionStorage.listProducts=JSON.stringify(this.listProducts);
    };
    this.getListProducts=function () {
        this.listProducts=JSON.parse(sessionStorage.listProducts);
    }
    this.addProducts=function () {
        let newProduct=document.getElementById("newproduct").value;
        let newMoney=document.getElementById("money").value;
        let newImage=document.getElementById("image").value;
        if (newProduct==""||newMoney==""||newImage=="")
        {
            alert("bạn thiếu 1 trong số những thông tin ở trên");
        }
        else {
           // this.listProducts.push([newProduct, ,]);
            //this.listProducts.push([newMoney, ,]);
            //this.listProducts.push([newImage, ,]);
            this.listProducts.push([newProduct,newMoney,newImage]);
            this.setListProduct();
            return this.displayProduct();
        }
    }
    this.displayProduct=function () {
        this.getListProducts();
        let saut="";
        saut=saut+"<tr>"+"<th>STT</th>"+"<th>Tên Sản Phẩm</th>"+"<th>Giá Tiền</th>"+"<th>Ảnh</th></tr>";
        for (let i=0;i<this.listProducts.length;i++) {
            saut=saut+"<tr>";
            saut=saut+'<td style="width: 50px; text-align: center"><p>' + (i + 1) + '</p></td>';

            saut=saut+'<td style="width: 100px;text-align: center"><p id="'+i+'">&nbsp;&nbsp;'+this.listProducts[i][0]+'</p></td>';

            saut=saut+'<td style="width: 100px;text-align: center"><p id="'+i+'">&nbsp;&nbsp;'+this.listProducts[i][1]+'</p></td>';

            saut=saut+'<td><img src="image/'+this.listProducts[i][2]+'" width="200px" height="200px"></td>';

            // saut=saut+'<td style="width: 80px; text-align: center"><input type="button" value="Edit" onclick="editProduct(' + i + ')"></input></td >';
            // saut=saut+'<td style="width: 80px; text-align: center"><input type="button" value="Delete" onclick="deleteProduct(' + i + ')"></input></td>';
            saut=saut+"</tr>";
        }
        document.getElementById("tableTotal").innerHTML=saut;
    }
};
var Products=new appProducs();


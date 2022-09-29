const items = [
    {
    id: 0,
    nome: 'Sabonete liquido: <br> R$56,60',
    img: 'https://cf.shopee.com.br/file/4b64c45bb0701ee80b954183dac031db',
    quantidade: 0
},
{
    id: 1,
    nome: 'Mascara esfoliante: <br> R$40,50',
    img: 'https://img.lojasrenner.com.br/item/565157831/zoom/1.jpg',
    quantidade: 0,
},
{
    id: 2,
    nome: 'Kit Mascaras Faciais: <br> R$69,99',
    img: 'https://oceane.vtexassets.com/arquivos/ids/198186-800-800?v=637721592208370000&width=800&height=800&aspect=true',
    quantidade: 0
},
{
  id: 3,
    nome: 'Serum facial: <br> R$55,99',
    img: 'https://drogariasp.vteximg.com.br/arquivos/ids/411150-1000-1000/Serum-Facial-Adcos-Acqua-Hidratacao-Intensiva-30ml-Drogaria-SP-713341.jpg?v=637332984634400000',
    quantidade: 0
},
{
  id: 4,
  nome: 'Gel de limpeza: <br> R$31,60',
  img: 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/279560-500-500/gel-de-limpeza-neutrogena-80g.jpg?v=636730590948830000',
  quantidade: 0
},
{
    id: 5,
    nome: 'Hidratande facial: <br> R$30,80',
    img: 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/473525-500-500/hidratante-facial-nivea-creme-facial-nutritivo.jpg?v=637787303679730000',
    quantidade: 0
},
{
    id: 6,
    nome: 'Protetor solar: <br> R$29,99',
    price: 29.9,
    img: 'https://34901.cdn.simplo7.net/static/34901/sku/avon-pronta-entrega-avon-care-sun-protetor-solar-facial-care-sun-fps-50-50-g--p-1654782237937.jpg',
    quantidade: 0
},
{
    id: 7,
    nome: 'Tonico: <br> R$19,99',
    img: 'https://d358a814b78lcf.cloudfront.net/Custom/Content/Products/10/01/1001881_tonico-facial-peles-oleosas-hb-330-ruby-rose-4856_m1_636802125923457150.jpg',
    quantidade: 0
},
{
    id: 8,
    nome: 'Esponja eletrica: <br> R$100,00',
    img: 'https://images.tcdn.com.br/img/img_prod/936043/forever_foreo_esponja_eletrica_massageadora_de_limpeza_facial_771_1_44b158e2a347a911c9ef9218a58c5fa0.jpg',
    quantidade: 0
},

]

 iniciarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        console.log(val)
        containerProdutos.innerHTML+= `
        <div class="produto-single">
        <p> ` +val.nome+`</p>
        <img src="`+val.img+`"  />
        <a key="`+val.id+`" href="#"> Adicionar ao carrinho! <br> <a/>
        
    
        </div>
        `;
    })
 }
 iniciarLoja();

 atualizarcarrinho = () => {
    console.log()
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    items.map((val)=>{
        if(val.quantidade > 0){
            containerCarrinho.innerHTML += `
            <p1>Carrinho:</p1>
            <p>` +val.nome+` | quantidade: `+val.quantidade+`</p>
            <hr>

            `;
        }
    })
  }

  var links = document.querySelectorAll('a');
  for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute ('key');
        items[key].quantidade++;
        total += items[key].price;;
        atualizarcarrinho();
        return false;
    })
  }
  
package encapsulamento;

public class Main {
    public static void main(String[] args) {
        Produto teclado = new Produto("Teclado", 350, 6);

        System.out.println("Nome: " + teclado.getNome());
        System.out.println("Preço: " + teclado.getPreco());
        System.out.println("Quantidade: " + teclado.getQuantidade());

        teclado.aplicarDesconto(5);

        System.out.println("Preço com desconto: " + teclado.getPreco());
    }
}

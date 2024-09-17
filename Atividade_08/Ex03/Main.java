package heranca;

public class Main {
    public static void main(String[] args) {

        Funcionario gerente = new Gerente("Jaques", 55000.0);
        Funcionario dev = new Desenvolvedor("Nathália", 20000.0);

        System.out.println("Nome: " + gerente.getNome());
        System.out.println("Salário: " + gerente.getSalario());
        System.out.println("Bônus: " + gerente.calcularBonus());
        System.out.println("Trabalhando: " + gerente.trabalhar());

        System.out.println();

        System.out.println("Nome: " + dev.getNome());
        System.out.println("Salário: " + dev.getSalario());
        System.out.println("Bônus: " + dev.calcularBonus());
        System.out.println("Trabalhando: " + dev.trabalhar());

        
    }



}

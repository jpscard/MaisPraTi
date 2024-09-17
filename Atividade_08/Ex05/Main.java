package polimosfismo;

public class Main {
    public static void main(String[] args) {
        IMeioTransporte[] transportes = {
            new Carro(),
            new Bicicleta(),
            new Trem()
        };

        for (IMeioTransporte transporte : transportes) {
            transporte.acelerar();
            transporte.frear();
            System.out.println();
    }
}
}
package polimosfismo.exercicioAnimais;

public class Main {
    public static void main(String[] args) {
        Animal[] animais = {
            new Cachorro(),
            new Gato(),
            new Ave()
        };

        for(Animal animal : animais) {
            animal.emitirSom();
        }
    }

    
}

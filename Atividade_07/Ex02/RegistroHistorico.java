package Lista7.Ex02;

public class RegistroHistorico {
    private String endereco;
    private RegistroHistorico proximoRegistro;

    public RegistroHistorico(String endereco) {
        this.endereco = endereco;
        this.proximoRegistro = null;
    }

    public String obterEndereco() {
        return endereco;
    }

    public void definirEndereco(String endereco) {
        this.endereco = endereco;
    }

    public RegistroHistorico obterProximoRegistro() {
        return proximoRegistro;
    }

    public void definirProximoRegistro(RegistroHistorico proximoRegistro) {
        this.proximoRegistro = proximoRegistro;
    }

    @Override
    public String toString() {
        return "RegistroHistorico [endereco=" + endereco + ", proximoRegistro=" + proximoRegistro + "]";
    }
}

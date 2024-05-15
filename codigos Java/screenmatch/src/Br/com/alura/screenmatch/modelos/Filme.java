package Br.com.alura.screenmatch.modelos;
import Br.com.alura.screenmatch.calculo.Classificavel;

public class Filme  extends Titulo implements Classificavel {
    private String diretor;

    public void setDiretor(String diretor) {
        this.diretor = diretor;
    }

    public String getDiretor() {
        return diretor;
    }

    @Override
    public int getClassificacao() {
      return (int)getTotalDeAvaliacoes() / 2;
    }

}

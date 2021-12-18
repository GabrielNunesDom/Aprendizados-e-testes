//Gerente herda atributos da classe funcionario usando a palavra extends
public class EditorVideo extends Funcionario {

	public double getBonificacao() {
		System.out.println("Chamando o método de bonificacao do Editor de Video");
		return + 150;
	}

}

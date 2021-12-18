//Gerente � um Funcionario que herda os atributos da classe Autenticavel usando a palavra extends, assinando o contrato Autenticavel
public class Gerente extends Funcionario implements Autenticavel{

	private AutenticacaoUtil autenticador;

	public Gerente() {
		this.autenticador = new AutenticacaoUtil();
	}
	
	public double getBonificacao() {
		System.out.println("chamando o m�todo de bonificacao do GERENTE");
		return super.getSalario();
	}
	
	@Override
	public void setSenha(int senha) {
		this.autenticador.setSenha(senha);
	}

	@Override
	public boolean autentica(int senha) {
		return this.autenticador.autentica(senha);
	}

}

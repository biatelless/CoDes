// Script para buscar amigos
document.addEventListener('DOMContentLoaded', function() {
    const inputBusca = document.getElementById('input-busca-amigo');
    
    if (inputBusca) {
        // Adiciona evento para quando o usuário pressionar Enter
        inputBusca.addEventListener('keypress', function(event) {
            if (event.key === 'Enter' || event.keyCode === 13) {
                event.preventDefault();
                buscarAmigo();
            }
        });
    }
});

function buscarAmigo() {
    const inputBusca = document.getElementById('input-busca-amigo');
    const nomeBuscado = inputBusca.value.trim();
    
    // Remove espaços extras e compara (case-insensitive)
    const nomeNormalizado = nomeBuscado.toLowerCase().replace(/\s+/g, ' ').trim();
    const nomeEsperado = 'paula lima';
    
    if (nomeNormalizado === nomeEsperado) {
        // Redireciona para o perfil de Paula Lima
        window.location.href = 'tela_perfil_paula.html';
    } else if (nomeBuscado.length > 0) {
        // Redireciona para a página de usuário não encontrado
        window.location.href = 'tela_usuario_nao_encontrado.html';
    }
}


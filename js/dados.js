/* Serviço Fácil — base de dados do catálogo.
 * ARQUIVO GERADO: não edite à mão. Edite os arquivos em data/ e rode `npm run dados`.
 * Pesquisa do grupo, consulta em 2026-11-15. Lido pelo js/servicos.js e js/impacto.js. */

const servicos = [
  {
    "id": "br-cpf-inscricao",
    "nome": "Fazer inscrição no CPF",
    "nomes_populares": [
      "primeiro CPF",
      "tirar CPF"
    ],
    "categoria": "documentacao_civil",
    "abrangencia": "nacional",
    "localidade": {
      "uf": null,
      "municipio": null
    },
    "orgao_responsavel": "Receita Federal",
    "descricao": "Obter número de CPF.",
    "publico": "Brasileiros e estrangeiros, residentes no Brasil ou exterior.",
    "condicoes_acesso": [],
    "documentos_obrigatorios": [
      {
        "documento": "Identificação oficial com foto",
        "observacao": "Regra geral; menores têm alternativas abaixo.",
        "fontes": [
          "cpf-ins"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "Certidão de nascimento ou casamento",
        "quando": "Identificação sem naturalidade, filiação ou nascimento.",
        "observacao": "Estrangeiros: documento equivalente.",
        "fontes": [
          "cpf-ins"
        ]
      },
      {
        "documento": "Certidão ou identificação do menor e identificação do responsável",
        "quando": "Menor de 16 anos ou pedido por responsável.",
        "observacao": "Tutela/guarda exige comprovação; aos 16–17 anos pode solicitar pessoalmente com identificação.",
        "fontes": [
          "cpf-ins"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Escolher formulário conforme residência/nacionalidade e enviar os dados.",
        "canal_url": "https://www.gov.br/pt-br/servicos/inscrever-no-cpf",
        "fontes": [
          "cpf-ins"
        ]
      },
      {
        "ordem": 2,
        "acao": "Cumprir eventual exigência da Receita e obter comprovante.",
        "canal_url": "https://www.gov.br/pt-br/servicos/inscrever-no-cpf",
        "fontes": [
          "cpf-ins"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "portal_oficial",
        "nome": "Inscrever Cidadão no CPF",
        "url": "https://www.gov.br/pt-br/servicos/inscrever-no-cpf"
      }
    ],
    "custo": {
      "status": "variavel",
      "valor_brl": null,
      "descricao": "Gratuito na Receita; R$ 7,00 nas unidades conveniadas indicadas.",
      "fontes": [
        "cpf-ins"
      ]
    },
    "prazo": {
      "status": "pendente",
      "descricao": "Prazo final depende do canal e da análise; não confirmado.",
      "fontes": [
        "cpf-ins"
      ]
    },
    "observacoes": [
      "Documentos adicionais podem ser solicitados."
    ],
    "fontes": [
      {
        "id": "cpf-ins",
        "url": "https://www.gov.br/pt-br/servicos/inscrever-no-cpf",
        "titulo": "Inscrever Cidadão no CPF",
        "orgao": "Receita Federal",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "nome",
          "descricao",
          "publico",
          "documentos",
          "passo_a_passo",
          "canais",
          "custo",
          "observacoes"
        ],
        "limitacoes": []
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Prazo final por canal; documentação de procuração, falecidos e demais situações especiais não consolidada."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "br-cpf-comprovante",
    "nome": "Obter comprovante de inscrição no CPF",
    "nomes_populares": [
      "cartão CPF",
      "segunda via CPF"
    ],
    "categoria": "documentacao_civil",
    "abrangencia": "nacional",
    "localidade": {
      "uf": null,
      "municipio": null
    },
    "orgao_responsavel": "Receita Federal",
    "descricao": "Emitir comprovante de inscrição para salvar ou imprimir.",
    "publico": "Pessoa já inscrita no CPF.",
    "condicoes_acesso": [],
    "documentos_obrigatorios": [],
    "documentos_status": "nao_se_aplica",
    "documentos_condicionais": [
      {
        "documento": "Identificação oficial com foto",
        "quando": "Atendimento documental pela Receita.",
        "observacao": "No autoatendimento, informar os dados pedidos; não presumir envio de imagem.",
        "fontes": [
          "cpf-comp"
        ]
      },
      {
        "documento": "Identificação do representante e prova de representação",
        "quando": "Pedido por outra pessoa.",
        "observacao": "Procuração, tutela ou documento correspondente.",
        "fontes": [
          "cpf-comp"
        ]
      },
      {
        "documento": "Foto segurando identificação junto ao rosto",
        "quando": "Solicitação por e-mail.",
        "observacao": "Do titular ou responsável; atendente pode pedir complementos.",
        "fontes": [
          "cpf-comp"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Escolher emissão autenticada ou opção sem gov.br, quando elegível.",
        "canal_url": "https://www.gov.br/pt-br/servicos/obter-cartao-de-cpf",
        "fontes": [
          "cpf-comp"
        ]
      },
      {
        "ordem": 2,
        "acao": "Informar dados e salvar comprovante; sem conhecer o número, procurar a Receita.",
        "canal_url": "https://www.gov.br/pt-br/servicos/obter-cartao-de-cpf",
        "fontes": [
          "cpf-comp"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "portal_oficial",
        "nome": "Obter Cartão de CPF",
        "url": "https://www.gov.br/pt-br/servicos/obter-cartao-de-cpf"
      }
    ],
    "custo": {
      "status": "gratuito",
      "valor_brl": 0,
      "descricao": "Gratuito.",
      "fontes": [
        "cpf-comp"
      ]
    },
    "prazo": {
      "status": "confirmado",
      "descricao": "Online: imediato; e-mail: média de 48 horas.",
      "fontes": [
        "cpf-comp"
      ]
    },
    "observacoes": [
      "Não é emitido cartão plástico.",
      "Não confundir comprovante de inscrição com consulta da situação cadastral."
    ],
    "fontes": [
      {
        "id": "cpf-comp",
        "url": "https://www.gov.br/pt-br/servicos/obter-cartao-de-cpf",
        "titulo": "Obter Cartão de CPF",
        "orgao": "Receita Federal",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "nome",
          "descricao",
          "publico",
          "documentos",
          "passo_a_passo",
          "canais",
          "custo",
          "prazo",
          "observacoes"
        ],
        "limitacoes": [
          "Opção sem gov.br é indicada para quem não entregou IR nos últimos dois anos."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "confirmado",
    "pendencias": [],
    "apto_catalogo": "sim"
  },
  {
    "id": "br-cpf-situacao",
    "nome": "Consultar situação cadastral do CPF",
    "nomes_populares": [
      "comprovante situação CPF",
      "consultar CPF"
    ],
    "categoria": "documentacao_civil",
    "abrangencia": "nacional",
    "localidade": {
      "uf": null,
      "municipio": null
    },
    "orgao_responsavel": "Receita Federal",
    "descricao": "Consultar cadastro e emitir comprovante de situação cadastral.",
    "publico": "Pessoa inscrita no CPF.",
    "condicoes_acesso": [],
    "documentos_obrigatorios": [],
    "documentos_status": "nao_se_aplica",
    "documentos_condicionais": [],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Abrir Consultar Situação do CPF e informar os dados solicitados.",
        "canal_url": "https://www.gov.br/pt-br/servicos/consultar-cadastro-de-pessoas-fisicas",
        "fontes": [
          "cpf-sit"
        ]
      },
      {
        "ordem": 2,
        "acao": "Emitir comprovante; usar o canal de validação para verificar autenticidade.",
        "canal_url": "https://www.gov.br/pt-br/servicos/consultar-cadastro-de-pessoas-fisicas",
        "fontes": [
          "cpf-sit"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "portal_oficial",
        "nome": "Consultar Cadastro de Pessoa Física na Receita Federal",
        "url": "https://www.gov.br/pt-br/servicos/consultar-cadastro-de-pessoas-fisicas"
      }
    ],
    "custo": {
      "status": "gratuito",
      "valor_brl": 0,
      "descricao": "Gratuito.",
      "fontes": [
        "cpf-sit"
      ]
    },
    "prazo": {
      "status": "confirmado",
      "descricao": "Consulta online imediata.",
      "fontes": [
        "cpf-sit"
      ]
    },
    "observacoes": [
      "Dados de formulário não são documentos a anexar.",
      "Pendente de regularização exige consultar declarações de imposto de renda faltantes; esta consulta não regulariza automaticamente."
    ],
    "fontes": [
      {
        "id": "cpf-sit",
        "url": "https://www.gov.br/pt-br/servicos/consultar-cadastro-de-pessoas-fisicas",
        "titulo": "Consultar Cadastro de Pessoa Física na Receita Federal",
        "orgao": "Receita Federal",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "nome",
          "descricao",
          "publico",
          "passo_a_passo",
          "canais",
          "custo",
          "prazo",
          "observacoes"
        ],
        "limitacoes": []
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "confirmado",
    "pendencias": [],
    "apto_catalogo": "sim"
  },
  {
    "id": "br-ctps",
    "nome": "Acessar Carteira de Trabalho Digital",
    "nomes_populares": [
      "CTPS Digital",
      "carteira de trabalho"
    ],
    "categoria": "trabalho",
    "abrangencia": "nacional",
    "localidade": {
      "uf": null,
      "municipio": null
    },
    "orgao_responsavel": "Ministério do Trabalho e Emprego",
    "descricao": "Consultar o documento e registros profissionais.",
    "publico": "Qualquer pessoa com CPF.",
    "condicoes_acesso": [
      "Número de CPF e conta gov.br autenticada."
    ],
    "documentos_obrigatorios": [],
    "documentos_status": "nao_se_aplica",
    "documentos_condicionais": [],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Acessar serviço web ou aplicativo indicado e entrar com gov.br.",
        "canal_url": "https://www.gov.br/pt-br/servicos/obter-a-carteira-de-trabalho",
        "fontes": [
          "ctps"
        ]
      },
      {
        "ordem": 2,
        "acao": "Consultar carteira; dificuldades podem ser encaminhadas ao atendimento do MTE.",
        "canal_url": "https://www.gov.br/pt-br/servicos/obter-a-carteira-de-trabalho",
        "fontes": [
          "ctps"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "portal_oficial",
        "nome": "Obter a Carteira de Trabalho",
        "url": "https://www.gov.br/pt-br/servicos/obter-a-carteira-de-trabalho"
      }
    ],
    "custo": {
      "status": "gratuito",
      "valor_brl": 0,
      "descricao": "Gratuito.",
      "fontes": [
        "ctps"
      ]
    },
    "prazo": {
      "status": "confirmado",
      "descricao": "Acesso imediato; atendimento de suporte não tem prazo estimado.",
      "fontes": [
        "ctps"
      ]
    },
    "observacoes": [
      "CPF e conta gov.br são requisitos de acesso; a página não exige anexos para habilitação digital."
    ],
    "fontes": [
      {
        "id": "ctps",
        "url": "https://www.gov.br/pt-br/servicos/obter-a-carteira-de-trabalho",
        "titulo": "Obter a Carteira de Trabalho",
        "orgao": "MTE",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "nome",
          "descricao",
          "publico",
          "condicoes_acesso",
          "passo_a_passo",
          "canais",
          "custo",
          "prazo",
          "observacoes"
        ],
        "limitacoes": []
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "confirmado",
    "pendencias": [],
    "apto_catalogo": "sim"
  },
  {
    "id": "br-passaporte",
    "nome": "Solicitar passaporte comum brasileiro",
    "nomes_populares": [
      "tirar passaporte",
      "renovar passaporte"
    ],
    "categoria": "documentacao_civil",
    "abrangencia": "nacional",
    "localidade": {
      "uf": null,
      "municipio": null
    },
    "orgao_responsavel": "Polícia Federal",
    "descricao": "Solicitar documento de viagem.",
    "publico": "Brasileiros em território brasileiro.",
    "condicoes_acesso": [
      "Comparecimento presencial inclusive de menores; requisitos individualizados pela PF."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "Identificação e documento com CPF",
        "observacao": "Consultar alternativas admitidas pela PF.",
        "fontes": [
          "pass-doc"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "Certidões de nomes anteriores",
        "quando": "Houve alteração de nome.",
        "observacao": "Abrangência depende de já ter passaporte anterior.",
        "fontes": [
          "pass-doc"
        ]
      },
      {
        "documento": "Passaporte anterior ou documentação da ocorrência",
        "quando": "Já possui passaporte.",
        "observacao": "Conferir regra de validade/perda.",
        "fontes": [
          "pass-doc"
        ]
      },
      {
        "documento": "Autorização para menor ou prova de emancipação",
        "quando": "Menor de 18 anos.",
        "observacao": "Forma depende de quem acompanha; verificar documentação dos responsáveis.",
        "fontes": [
          "pass-doc"
        ]
      },
      {
        "documento": "Foto 5 × 7",
        "quando": "Menor de 5 anos.",
        "observacao": "Regras na lista da PF.",
        "fontes": [
          "pass-doc"
        ]
      },
      {
        "documento": "Comprovação eleitoral/militar",
        "quando": "Aplicável e solicitada pela PF.",
        "observacao": "Não exigir comprovantes impressos de todos.",
        "fontes": [
          "pass-doc"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Conferir lista individualizada e preencher formulário oficial.",
        "canal_url": "https://www.gov.br/pt-br/servicos/obter-passaporte-comum-para-brasileiro",
        "fontes": [
          "pass"
        ]
      },
      {
        "ordem": 2,
        "acao": "Pagar taxa, agendar e comparecer com originais.",
        "canal_url": "https://www.gov.br/pt-br/servicos/obter-passaporte-comum-para-brasileiro",
        "fontes": [
          "pass",
          "pass-doc"
        ]
      },
      {
        "ordem": 3,
        "acao": "Acompanhar emissão e retirar conforme orientação da unidade.",
        "canal_url": "https://www.gov.br/pt-br/servicos/obter-passaporte-comum-para-brasileiro",
        "fontes": [
          "pass"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "portal_oficial",
        "nome": "Obter passaporte",
        "url": "https://www.gov.br/pt-br/servicos/obter-passaporte-comum-para-brasileiro"
      }
    ],
    "custo": {
      "status": "pago",
      "valor_brl": 257.25,
      "descricao": "Taxa comum R$ 257,25; urgência/emergência R$ 334,42; perda de passaporte válido R$ 514,50.",
      "fontes": [
        "pass"
      ]
    },
    "prazo": {
      "status": "com_ressalva",
      "descricao": "Portal estima 6–10 dias úteis; confirmar disponibilidade de atendimento e entrega na unidade.",
      "fontes": [
        "pass"
      ]
    },
    "observacoes": [
      "Esta ficha cobre passaporte comum no Brasil."
    ],
    "fontes": [
      {
        "id": "pass",
        "url": "https://www.gov.br/pt-br/servicos/obter-passaporte-comum-para-brasileiro",
        "titulo": "Obter passaporte",
        "orgao": "PF",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "nome",
          "descricao",
          "publico",
          "condicoes_acesso",
          "passo_a_passo",
          "canais",
          "custo",
          "prazo"
        ],
        "limitacoes": []
      },
      {
        "id": "pass-doc",
        "url": "https://www.gov.br/pf/pt-br/assuntos/passaporte/documentacao/lista-brasileiro",
        "titulo": "Documentação necessária — solicitante brasileiro",
        "orgao": "PF",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "documentos",
          "condicoes_acesso"
        ],
        "limitacoes": [
          "Lista resumida; consultar orientações completas para nacionalidade, menores, mudanças cadastrais e regularidade."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Exceções documentais devem ser verificadas na lista individualizada da PF."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "br-cadunico",
    "nome": "Inscrever ou atualizar família no Cadastro Único",
    "nomes_populares": [
      "CadÚnico",
      "cadastro social"
    ],
    "categoria": "assistencia_social",
    "abrangencia": "nacional",
    "localidade": {
      "uf": null,
      "municipio": null
    },
    "orgao_responsavel": "MDS; execução pelas prefeituras",
    "descricao": "Registrar composição e condições da família para políticas sociais.",
    "publico": "Famílias de baixa renda; acima de meio salário mínimo por pessoa, quando vinculadas a programa específico.",
    "condicoes_acesso": [
      "Responsável familiar a partir de 16 anos; representante legal quando necessário."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "CPF/documento com CPF dos integrantes",
        "observacao": "Levar documentos de todos; falta documental requer orientação do posto.",
        "fontes": [
          "cad-faq"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "Documento com foto do responsável e comprovante ou declaração de residência",
        "quando": "Regra geral da entrevista.",
        "observacao": "Há dispensas para indígenas, quilombolas e pessoas em situação de rua.",
        "fontes": [
          "cad-faq"
        ]
      },
      {
        "documento": "CPF e prova de representação",
        "quando": "Entrevista feita por representante legal.",
        "observacao": "Também apresentar documentos da pessoa representada.",
        "fontes": [
          "cad-faq"
        ]
      },
      {
        "documento": "Termo de responsabilidade",
        "quando": "Família unipessoal, conforme enquadramento.",
        "observacao": "Há exceções; atendimento domiciliar pode ser necessário.",
        "fontes": [
          "cad-faq"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Localizar posto municipal/CRAS e conferir atendimento.",
        "canal_url": "https://www.gov.br/pt-br/servicos/inscrever-se-no-cadastro-unico-para-programas-sociais-do-governo-federal",
        "fontes": [
          "cad"
        ]
      },
      {
        "ordem": 2,
        "acao": "Participar da entrevista; atualizar mudanças e, no máximo, a cada dois anos.",
        "canal_url": "https://www.gov.br/mds/pt-br/acoes-e-programas/cadastro-unico/perguntas-frequentes-cadastro-unico",
        "fontes": [
          "cad",
          "cad-faq"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "portal_oficial",
        "nome": "Inscrever-se no Cadastro Único",
        "url": "https://www.gov.br/pt-br/servicos/inscrever-se-no-cadastro-unico-para-programas-sociais-do-governo-federal"
      },
      {
        "tipo": "portal_oficial",
        "nome": "Perguntas Frequentes — Cadastro Único",
        "url": "https://www.gov.br/mds/pt-br/acoes-e-programas/cadastro-unico/perguntas-frequentes-cadastro-unico"
      }
    ],
    "custo": {
      "status": "gratuito",
      "valor_brl": 0,
      "descricao": "Gratuito.",
      "fontes": [
        "cad"
      ]
    },
    "prazo": {
      "status": "pendente",
      "descricao": "Agendamento e conclusão dependem do município.",
      "fontes": [
        "cad"
      ]
    },
    "observacoes": [
      "Serviço nacional executado municipalmente; cadastro não concede benefício automaticamente."
    ],
    "fontes": [
      {
        "id": "cad",
        "url": "https://www.gov.br/pt-br/servicos/inscrever-se-no-cadastro-unico-para-programas-sociais-do-governo-federal",
        "titulo": "Inscrever-se no Cadastro Único",
        "orgao": "MDS",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "nome",
          "descricao",
          "publico",
          "condicoes_acesso",
          "passo_a_passo",
          "canais",
          "custo",
          "observacoes"
        ],
        "limitacoes": [
          "Carta contém referência antiga a CPF ou título."
        ]
      },
      {
        "id": "cad-faq",
        "url": "https://www.gov.br/mds/pt-br/acoes-e-programas/cadastro-unico/perguntas-frequentes-cadastro-unico",
        "titulo": "Perguntas Frequentes — Cadastro Único",
        "orgao": "MDS",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "documentos",
          "passo_a_passo",
          "observacoes"
        ],
        "limitacoes": [
          "Página reúne seções de anos distintos; usadas orientações documentais e de unipessoais mais recentes, sem aplicar exigência domiciliar indiscriminadamente."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Confirmar agenda municipal e tratamento de famílias sem documentos; consolidar exceções de unipessoais no município."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "br-id-jovem",
    "nome": "Emitir ID Jovem",
    "nomes_populares": [
      "Identidade Jovem"
    ],
    "categoria": "assistencia_social",
    "abrangencia": "nacional",
    "localidade": {
      "uf": null,
      "municipio": null
    },
    "orgao_responsavel": "Secretaria Nacional de Juventude",
    "descricao": "Gerar identificação para benefícios de jovens de baixa renda.",
    "publico": "Pessoas de 15 a 29 anos.",
    "condicoes_acesso": [
      "Renda familiar até dois salários mínimos; CadÚnico atualizado nos últimos 24 meses.",
      "Não exige estar estudando."
    ],
    "documentos_obrigatorios": [],
    "documentos_status": "nao_se_aplica",
    "documentos_condicionais": [
      {
        "documento": "Identificação com foto e comprovantes de renda/residência",
        "quando": "Necessário cadastrar ou atualizar CadÚnico no CRAS.",
        "observacao": "Confirmar documentos com posto local.",
        "fontes": [
          "idj"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Conferir CadÚnico; se necessário, regularizar no CRAS.",
        "canal_url": "https://www.gov.br/pt-br/servicos/obter-a-carteira-de-identidade-jovem",
        "fontes": [
          "idj"
        ]
      },
      {
        "ordem": 2,
        "acao": "No site/aplicativo oficial, informar NIS ou CPF, nome e nascimento e emitir.",
        "canal_url": "https://www.gov.br/pt-br/servicos/obter-a-carteira-de-identidade-jovem",
        "fontes": [
          "idj"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "portal_oficial",
        "nome": "Gerar carteira do ID JOVEM",
        "url": "https://www.gov.br/pt-br/servicos/obter-a-carteira-de-identidade-jovem"
      }
    ],
    "custo": {
      "status": "gratuito",
      "valor_brl": 0,
      "descricao": "Gratuito.",
      "fontes": [
        "idj"
      ]
    },
    "prazo": {
      "status": "com_ressalva",
      "descricao": "Emissão imediata se habilitado na base; portal estima até dois dias úteis para o serviço, sem garantir sincronização cadastral.",
      "fontes": [
        "idj"
      ]
    },
    "observacoes": [
      "Dados de emissão não significam anexar documentos."
    ],
    "fontes": [
      {
        "id": "idj",
        "url": "https://www.gov.br/pt-br/servicos/obter-a-carteira-de-identidade-jovem",
        "titulo": "Gerar carteira do ID JOVEM",
        "orgao": "Secretaria-Geral da Presidência / Juventude",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "nome",
          "descricao",
          "publico",
          "condicoes_acesso",
          "documentos",
          "passo_a_passo",
          "canais",
          "custo",
          "prazo",
          "observacoes"
        ],
        "limitacoes": []
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "confirmado",
    "pendencias": [],
    "apto_catalogo": "sim"
  },
  {
    "id": "br-prouni",
    "nome": "Participar do ProUni e comprovar informações",
    "nomes_populares": [
      "bolsa ProUni",
      "documentos ProUni"
    ],
    "categoria": "educacao",
    "abrangencia": "nacional",
    "localidade": {
      "uf": null,
      "municipio": null
    },
    "orgao_responsavel": "MEC; comprovação pela instituição de ensino",
    "descricao": "Concorrer a bolsa integral ou parcial em faculdade privada.",
    "publico": "Brasileiros sem graduação, conforme critérios do edital.",
    "condicoes_acesso": [
      "Enem: média mínima 450, redação acima de zero; edições admitidas no edital.",
      "Renda por pessoa: até 1,5 salário mínimo para bolsa integral e três para parcial; professores têm regra específica."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "Identificação do candidato e familiares",
        "observacao": "Na comprovação após pré-seleção.",
        "fontes": [
          "prouni-doc"
        ]
      },
      {
        "documento": "Comprovante de residência e escolaridade",
        "observacao": "Na instituição; conferir histórico/conclusão exigidos.",
        "fontes": [
          "prouni",
          "prouni-doc"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "Comprovantes de renda",
        "quando": "Quando renda integrar a elegibilidade.",
        "observacao": "Documentos variam por atividade de cada familiar; não exigir só três holerites.",
        "fontes": [
          "prouni-doc"
        ]
      },
      {
        "documento": "Comprovações de deficiência, docência, composição familiar ou pensão",
        "quando": "Conforme situação declarada e edital.",
        "observacao": "Instituição pode solicitar complementos.",
        "fontes": [
          "prouni-doc"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Consultar edital e inscrever-se com dados pessoais, escolares e familiares.",
        "canal_url": "https://www.gov.br/pt-br/servicos/obter-bolsa-de-estudo-do-prouni",
        "fontes": [
          "prouni"
        ]
      },
      {
        "ordem": 2,
        "acao": "Se pré-selecionado, obter checklist e comprovar informações na instituição.",
        "canal_url": "https://www.gov.br/pt-br/servicos/obter-bolsa-de-estudo-do-prouni",
        "fontes": [
          "prouni",
          "prouni-doc"
        ]
      },
      {
        "ordem": 3,
        "acao": "Acompanhar validação e matrícula nos prazos da chamada.",
        "canal_url": "https://www.gov.br/pt-br/servicos/obter-bolsa-de-estudo-do-prouni",
        "fontes": [
          "prouni"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "portal_oficial",
        "nome": "Obter bolsa de estudo pelo ProUni",
        "url": "https://www.gov.br/pt-br/servicos/obter-bolsa-de-estudo-do-prouni"
      }
    ],
    "custo": {
      "status": "gratuito",
      "valor_brl": 0,
      "descricao": "Inscrição gratuita; bolsa parcial não cobre toda a mensalidade.",
      "fontes": [
        "prouni"
      ]
    },
    "prazo": {
      "status": "com_ressalva",
      "descricao": "Inscrição, comprovação e matrícula seguem edição/chamada; nenhuma janela aberta foi confirmada.",
      "fontes": [
        "prouni"
      ]
    },
    "observacoes": [
      "Inscrição não exige antecipar toda documentação de comprovação."
    ],
    "fontes": [
      {
        "id": "prouni",
        "url": "https://www.gov.br/pt-br/servicos/obter-bolsa-de-estudo-do-prouni",
        "titulo": "Obter bolsa de estudo pelo ProUni",
        "orgao": "MEC",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "nome",
          "descricao",
          "publico",
          "condicoes_acesso",
          "documentos",
          "passo_a_passo",
          "canais",
          "custo",
          "prazo"
        ],
        "limitacoes": [
          "Agenda embutida refere-se a 2025; não usada como prazo vigente."
        ]
      },
      {
        "id": "prouni-doc",
        "url": "https://prouniportal.mec.gov.br/tire-suas-duvidas-pesquisa/documentacao",
        "titulo": "ProUni — Documentação",
        "orgao": "MEC",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "trecho_indexado",
        "sustenta": [
          "documentos",
          "passo_a_passo",
          "observacoes"
        ],
        "limitacoes": [
          "Abertura retornou 403; evidência apenas indexada. Há texto antigo sobre escolaridade privada, não usado para excluir candidatos."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Checklist definitivo e edital da instituição/edição; confirmar hipóteses e comprovantes específicos."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "br-fies",
    "nome": "Participar do Fies, validar e contratar financiamento",
    "nomes_populares": [
      "financiamento Fies",
      "documentos Fies"
    ],
    "categoria": "educacao",
    "abrangencia": "nacional",
    "localidade": {
      "uf": null,
      "municipio": null
    },
    "orgao_responsavel": "MEC; CPSA da instituição; agente financeiro",
    "descricao": "Concorrer a financiamento de graduação privada.",
    "publico": "Candidatos que cumpram requisitos do edital.",
    "condicoes_acesso": [
      "Enem desde 2010, sem treineiro: média mínima 450 e redação acima de zero; renda familiar até três salários mínimos por pessoa."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "Identificação, CPF e comprovante de residência",
        "observacao": "Contratação: conferir lista do agente financeiro.",
        "fontes": [
          "fies-caixa"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "Comprovantes de renda e demais informações da inscrição",
        "quando": "Validação na CPSA conforme modalidade.",
        "observacao": "Checklist da instituição; não universalizar dispensa do Fies Social.",
        "fontes": [
          "fies",
          "fies-faq"
        ]
      },
      {
        "documento": "Certidão de casamento e documentos de representante/fiador",
        "quando": "Quando situação e garantia exigirem.",
        "observacao": "Fiador não é obrigatório em todos os contratos.",
        "fontes": [
          "fies",
          "fies-caixa"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Consultar edital, acessar com gov.br e realizar inscrição.",
        "canal_url": "https://www.gov.br/pt-br/servicos/obter-financiamento-do-fies",
        "fontes": [
          "fies"
        ]
      },
      {
        "ordem": 2,
        "acao": "Se pré-selecionado, complementar inscrição e validar na CPSA.",
        "canal_url": "https://www.gov.br/pt-br/servicos/obter-financiamento-do-fies",
        "fontes": [
          "fies"
        ]
      },
      {
        "ordem": 3,
        "acao": "Após validação, cumprir exigências do agente financeiro e formalizar contrato.",
        "canal_url": "https://www.gov.br/pt-br/servicos/obter-financiamento-do-fies",
        "fontes": [
          "fies",
          "fies-faq"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "portal_oficial",
        "nome": "Obter Financiamento Estudantil",
        "url": "https://www.gov.br/pt-br/servicos/obter-financiamento-do-fies"
      }
    ],
    "custo": {
      "status": "variavel",
      "valor_brl": null,
      "descricao": "Inscrição gratuita; financiamento gera obrigações conforme contrato.",
      "fontes": [
        "fies"
      ]
    },
    "prazo": {
      "status": "com_ressalva",
      "descricao": "Etapas têm prazos próprios; verificar sistema, edital e CPSA. Nenhuma inscrição aberta foi confirmada.",
      "fontes": [
        "fies",
        "fies-faq"
      ]
    },
    "observacoes": [
      "DRI é gerado na validação; FAQ do MEC dispensa sua apresentação ao banco, que usa dados eletrônicos.",
      "Matrícula, validação da CPSA e contratação são etapas distintas."
    ],
    "fontes": [
      {
        "id": "fies",
        "url": "https://www.gov.br/pt-br/servicos/obter-financiamento-do-fies",
        "titulo": "Obter Financiamento Estudantil",
        "orgao": "MEC",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "nome",
          "descricao",
          "publico",
          "condicoes_acesso",
          "documentos",
          "passo_a_passo",
          "canais",
          "custo",
          "prazo"
        ],
        "limitacoes": [
          "Agenda ainda exibe 2025; não usada como prazo atual."
        ]
      },
      {
        "id": "fies-faq",
        "url": "https://www.gov.br/mec/pt-br/acesso-a-informacao/perguntas-frequentes/fundo-de-financiamento-estudantil-fies",
        "titulo": "Fies — Perguntas frequentes",
        "orgao": "MEC",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "trecho_indexado",
        "sustenta": [
          "documentos",
          "passo_a_passo",
          "prazo",
          "observacoes"
        ],
        "limitacoes": [
          "Abertura exibiu desafio de verificação; usado somente texto indexado, inclusive dispensa do DRI impresso."
        ]
      },
      {
        "id": "fies-caixa",
        "url": "https://www.caixa.gov.br/programas-sociais/fies/Paginas/default.aspx",
        "titulo": "FIES — Financiamento Estudantil",
        "orgao": "CAIXA",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "trecho_indexado",
        "sustenta": [
          "documentos"
        ],
        "limitacoes": [
          "Abertura apresentou redirecionamento circular; texto indexado informa DRI facultativo."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Lista documental final da CPSA/agente financeiro; exceções do Fies Social, modalidade e edição precisam de confirmação individual."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "br-sisu",
    "nome": "Participar do Sisu e preparar matrícula",
    "nomes_populares": [
      "inscrição Sisu",
      "documentos matrícula universidade"
    ],
    "categoria": "educacao",
    "abrangencia": "nacional",
    "localidade": {
      "uf": null,
      "municipio": null
    },
    "orgao_responsavel": "MEC; matrícula pela instituição pública",
    "descricao": "Concorrer a vaga pública usando nota do Enem.",
    "publico": "Participante regular do Enem, sem redação zerada.",
    "condicoes_acesso": [
      "Conta gov.br; atender notas mínimas e modalidade da vaga.",
      "Na edição regular de 2026: Enem 2023, 2024 ou 2025, usando a melhor média ponderada para a opção. Conferir novamente em edições futuras."
    ],
    "documentos_obrigatorios": [],
    "documentos_status": "pendente",
    "documentos_condicionais": [
      {
        "documento": "Documentação de matrícula definida pela instituição",
        "quando": "Após convocação.",
        "observacao": "Preparar identificação e escolaridade conforme edital; não existe lista nacional única.",
        "fontes": [
          "sisu-ufop"
        ]
      },
      {
        "documento": "Comprovação de cotas e formulários",
        "quando": "Conforme modalidade de concorrência.",
        "observacao": "Renda, trajetória escolar, deficiência e pertencimento étnico-racial dependem do edital.",
        "fontes": [
          "sisu-ufop"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Consultar edital e escolher até duas opções no sistema oficial.",
        "canal_url": "https://www.gov.br/pt-br/servicos/inscrever-se-no-sisu-sistema-de-selecao-unificada",
        "fontes": [
          "sisu"
        ]
      },
      {
        "ordem": 2,
        "acao": "Acompanhar chamada/lista de espera.",
        "canal_url": "https://www.gov.br/pt-br/servicos/inscrever-se-no-sisu-sistema-de-selecao-unificada",
        "fontes": [
          "sisu"
        ]
      },
      {
        "ordem": 3,
        "acao": "Consultar site da instituição convocante e cumprir matrícula e validações.",
        "canal_url": "https://www.gov.br/pt-br/servicos/inscrever-se-no-sisu-sistema-de-selecao-unificada",
        "fontes": [
          "sisu",
          "sisu-ufop"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "portal_oficial",
        "nome": "Inscrever-se no Sisu",
        "url": "https://www.gov.br/pt-br/servicos/inscrever-se-no-sisu-sistema-de-selecao-unificada"
      }
    ],
    "custo": {
      "status": "gratuito",
      "valor_brl": 0,
      "descricao": "Inscrição gratuita.",
      "fontes": [
        "sisu"
      ]
    },
    "prazo": {
      "status": "com_ressalva",
      "descricao": "Seleção e matrícula seguem cronogramas distintos; nenhuma janela aberta foi confirmada.",
      "fontes": [
        "sisu",
        "sisu-ufop"
      ]
    },
    "observacoes": [
      "UFOP 2026 é exemplo de listas por modalidade, não requisito para todas as instituições.",
      "A regra de três edições foi verificada para 2026; não presume continuidade em 2027.",
      "Página oficial da UFC lida integralmente confirma Enem 2023, 2024 ou 2025 no Sisu 2026; não usar como edital de 2027."
    ],
    "fontes": [
      {
        "id": "sisu",
        "url": "https://www.gov.br/pt-br/servicos/inscrever-se-no-sisu-sistema-de-selecao-unificada",
        "titulo": "Inscrever-se no Sisu",
        "orgao": "MEC",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "nome",
          "descricao",
          "publico",
          "condicoes_acesso",
          "passo_a_passo",
          "canais",
          "custo",
          "prazo"
        ],
        "limitacoes": [
          "Mistura login gov.br com menções antigas à senha/ano anterior do Enem; essas menções não foram reproduzidas."
        ]
      },
      {
        "id": "sisu-norma",
        "url": "https://mecnormas.mec.gov.br/pesquisa/detalhar/959",
        "titulo": "Portaria Normativa MEC 21/2012 — texto alterado",
        "orgao": "MEC",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "trecho_indexado",
        "sustenta": [
          "condicoes_acesso"
        ],
        "limitacoes": [
          "Página aberta sem texto legível; regra de três edições disponível somente no índice."
        ]
      },
      {
        "id": "sisu-ufop",
        "url": "https://www.vestibular.ufop.br/sisu2026/documentos-para-matricula-sisu-edicao-unica-de-2026",
        "titulo": "Documentos para matrícula SiSU — 2026",
        "orgao": "UFOP",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "documentos",
          "passo_a_passo",
          "prazo",
          "observacoes"
        ],
        "limitacoes": [
          "Exemplo institucional; não nacionalizar requisitos."
        ]
      },
      {
        "id": "sisu-2026",
        "url": "https://www.gov.br/mec/pt-br/acesso-a-informacao/perguntas-frequentes/sisu/notas-do-enem/quem-nao-fez-o-enem",
        "titulo": "Quem não fez o Enem 2025 poderá participar do Sisu 2026?",
        "orgao": "MEC",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "trecho_indexado",
        "sustenta": [
          "condicoes_acesso"
        ],
        "limitacoes": [
          "Evidência indexada, sem leitura da página integral. Aplicação explicitamente limitada a 2026."
        ]
      },
      {
        "id": "sisu-ufc-2026",
        "url": "https://sisu.ufc.br/pt/o-que-e-o-sisu-2026/",
        "titulo": "SISU: O que é e como funciona — edição 2026",
        "orgao": "UFC",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "condicoes_acesso",
          "passo_a_passo",
          "custo"
        ],
        "limitacoes": [
          "Conteúdo referente à edição de 2026."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Anexar edital, chamada e checklist da instituição escolhida; conferir edições válidas na seleção desejada."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "br-enem",
    "nome": "Inscrever-se no Enem e preparar identificação",
    "nomes_populares": [
      "Enem",
      "documentos prova Enem"
    ],
    "categoria": "educacao",
    "abrangencia": "nacional",
    "localidade": {
      "uf": null,
      "municipio": null
    },
    "orgao_responsavel": "Inep",
    "descricao": "Participar do exame conforme a edição.",
    "publico": "Interessados conforme edital; treineiros têm condições próprias.",
    "condicoes_acesso": [
      "CPF e acesso à Página do Participante.",
      "Em 2026 existe inscrição automática para concluintes da rede pública, com providências no sistema."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "Documento oficial original com foto aceito",
        "observacao": "Na prova: consultar lista; digitais apenas em aplicativos autorizados, incluindo gov.br.",
        "fontes": [
          "enem-prova"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "Documentos para atendimento especializado ou recurso de isenção",
        "quando": "Quando solicitados no edital.",
        "observacao": "Não são exigidos de todos.",
        "fontes": [
          "enem-faq"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Consultar edital e acessar Página do Participante para inscrição/confirmação aplicável.",
        "canal_url": "https://www.gov.br/inep/pt-br/acesso-a-informacao/perguntas-frequentes/exame-nacional-do-ensino-medio-enem",
        "fontes": [
          "enem-faq",
          "enem-ret"
        ]
      },
      {
        "ordem": 2,
        "acao": "Pagar taxa se devida e acompanhar situação e local de prova.",
        "canal_url": "https://www.gov.br/inep/pt-br/acesso-a-informacao/perguntas-frequentes/exame-nacional-do-ensino-medio-enem",
        "fontes": [
          "enem-faq"
        ]
      },
      {
        "ordem": 3,
        "acao": "Comparecer com identificação válida.",
        "canal_url": "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/orientacoes/no-dia-do-exame",
        "fontes": [
          "enem-prova"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "portal_oficial",
        "nome": "Enem — Perguntas frequentes",
        "url": "https://www.gov.br/inep/pt-br/acesso-a-informacao/perguntas-frequentes/exame-nacional-do-ensino-medio-enem"
      },
      {
        "tipo": "portal_oficial",
        "nome": "No Dia do Exame",
        "url": "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/orientacoes/no-dia-do-exame"
      }
    ],
    "custo": {
      "status": "pago",
      "valor_brl": 85,
      "descricao": "Edição 2026: R$ 85,00, salvo gratuidade; rever para edição futura.",
      "fontes": [
        "enem-faq"
      ]
    },
    "prazo": {
      "status": "com_ressalva",
      "descricao": "FAQ informa inscrições de 25/05 a 12/06/2026; esse período passou. Próxima edição não confirmada.",
      "fontes": [
        "enem-faq"
      ]
    },
    "observacoes": [
      "Print/foto de documento não substitui apresentação no aplicativo oficial autorizado.",
      "Isenção e inscrição são procedimentos distintos; considerar a hipótese de inscrição automática de 2026.",
      "Na hipótese automática de 2026, o Inep orienta confirmar participação e complementar município de prova, língua estrangeira e acessibilidade quando necessária."
    ],
    "fontes": [
      {
        "id": "enem-faq",
        "url": "https://www.gov.br/inep/pt-br/acesso-a-informacao/perguntas-frequentes/exame-nacional-do-ensino-medio-enem",
        "titulo": "Enem — Perguntas frequentes",
        "orgao": "Inep",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "nome",
          "descricao",
          "publico",
          "condicoes_acesso",
          "documentos",
          "passo_a_passo",
          "canais",
          "custo",
          "prazo",
          "observacoes"
        ],
        "limitacoes": [
          "Página mistura orientações pré-edital e regras de 2026; não inferir inscrição aberta."
        ]
      },
      {
        "id": "enem-prova",
        "url": "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/orientacoes/no-dia-do-exame",
        "titulo": "No Dia do Exame",
        "orgao": "Inep",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "documentos",
          "passo_a_passo",
          "observacoes"
        ],
        "limitacoes": []
      },
      {
        "id": "enem-ret",
        "url": "https://mecnormas.mec.gov.br/pesquisa/detalhar/15620",
        "titulo": "Retificação de 07/10/2026 do Edital 64/2026",
        "orgao": "MEC / Inep",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "trecho_indexado",
        "sustenta": [
          "condicoes_acesso",
          "passo_a_passo"
        ],
        "limitacoes": [
          "Lido somente trecho indexado; retificação distingue providências de inscritos automaticamente.",
          "Abertura direta retornou página sem texto legível."
        ]
      },
      {
        "id": "enem-auto-inep",
        "url": "https://www.gov.br/inep/pt-br/acesso-a-informacao/perguntas-frequentes/exame-nacional-do-ensino-medio-enem/antes-do-exame-justificativa-de-ausencia-inscricoes-e-acompanhamento/o-estudante-com-inscricao-automatica",
        "titulo": "O estudante com inscrição automática ainda precisará acessar o sistema do Enem?",
        "orgao": "Inep",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "condicoes_acesso",
          "passo_a_passo",
          "observacoes"
        ],
        "limitacoes": [
          "Conteúdo referente à edição de 2026."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Conferir edital consolidado e retificações antes de orientar casos especiais ou próxima edição."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "br-certidao-civil-segunda-via",
    "nome": "Pedir segunda via de certidão civil",
    "nomes_populares": [
      "segunda via certidão nascimento",
      "segunda via certidão casamento",
      "segunda via certidão óbito"
    ],
    "categoria": "documentacao_civil",
    "abrangencia": "nacional",
    "localidade": {
      "uf": null,
      "municipio": null
    },
    "orgao_responsavel": "Cartório de Registro Civil responsável pelo registro; portal Registro Civil",
    "descricao": "Solicitar nova via de nascimento, casamento ou óbito.",
    "publico": "Interessados em certidão, conforme regras do registro e tipo solicitado.",
    "condicoes_acesso": [
      "Identificar registro e fornecer os dados pedidos no canal."
    ],
    "documentos_obrigatorios": [],
    "documentos_status": "pendente",
    "documentos_condicionais": [],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Acessar portal oficial, escolher certidão e preencher dados do registro.",
        "canal_url": "https://www.registrocivil.org.br/",
        "fontes": [
          "civil"
        ]
      },
      {
        "ordem": 2,
        "acao": "Selecionar formato/entrega e conferir valor; concluir pedido e acompanhar.",
        "canal_url": "https://www.registrocivil.org.br/",
        "fontes": [
          "civil"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "portal_oficial",
        "nome": "Pedido de 2ª via de certidão no Registro Civil",
        "url": "https://blog.registrocivil.org.br/passo-a-passo-pedido-de-2a-via-de-certidao-no-registrocivil-org-br/"
      },
      {
        "tipo": "portal_oficial",
        "nome": "Registro Civil — solicitar certidões",
        "url": "https://www.registrocivil.org.br/"
      }
    ],
    "custo": {
      "status": "variavel",
      "valor_brl": null,
      "descricao": "Emolumentos estaduais/distritais; frete e outros acréscimos podem existir. Valor e gratuidade devem ser conferidos no cartório.",
      "fontes": [
        "civil"
      ]
    },
    "prazo": {
      "status": "pendente",
      "descricao": "Sem prazo nacional confirmado para emissão e entrega.",
      "fontes": [
        "civil"
      ]
    },
    "observacoes": [
      "Dados para localizar registro não foram transformados em documentos obrigatórios.",
      "A emissão depende do cartório; o portal reúne pedidos."
    ],
    "fontes": [
      {
        "id": "civil",
        "url": "https://blog.registrocivil.org.br/passo-a-passo-pedido-de-2a-via-de-certidao-no-registrocivil-org-br/",
        "titulo": "Pedido de 2ª via de certidão no Registro Civil",
        "orgao": "Registro Civil / Arpen-BR",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "nome",
          "descricao",
          "passo_a_passo",
          "canais",
          "custo"
        ],
        "limitacoes": [
          "Guia de 2019: útil para fluxo, não para preço ou prazo atual.",
          "Portal de solicitação aberto em 15/11/2026 sem conteúdo legível pelo extrator; fluxo autenticado não testado."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Checklist do cartório; requisitos de inteiro teor, representação, gratuidade e prazo; confirmar aceitação do formato pelo destinatário."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "br-titulo-alistamento",
    "nome": "Solicitar primeiro título eleitoral",
    "nomes_populares": [
      "tirar título de eleitor",
      "alistamento eleitoral"
    ],
    "categoria": "cidadania",
    "abrangencia": "nacional",
    "localidade": {
      "uf": null,
      "municipio": null
    },
    "orgao_responsavel": "Justiça Eleitoral — TSE, TREs e cartórios",
    "descricao": "Realizar inscrição eleitoral inicial.",
    "publico": "Brasileiros a partir de 15 anos; voto a partir de 16.",
    "condicoes_acesso": [
      "Pedido pessoal; menores dispensam autorização de representante.",
      "Conscritos durante serviço militar e estrangeiros não podem alistar-se."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "Documento oficial de identificação",
        "observacao": "Frente/verso; deve comprovar nacionalidade e identificar o requerente.",
        "fontes": [
          "titulo",
          "titulo-doc"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "Comprovante de vínculo com o município",
        "quando": "Regra geral do domicílio eleitoral.",
        "observacao": "Há dispensas para indígenas, quilombolas e pessoas em situação de rua.",
        "fontes": [
          "titulo"
        ]
      },
      {
        "documento": "Comprovante de quitação militar",
        "quando": "Pessoas do gênero masculino na classe que completa 19 anos.",
        "observacao": "Consultar regra específica do TSE.",
        "fontes": [
          "titulo"
        ]
      },
      {
        "documento": "Selfie segurando identificação",
        "quando": "Pedido pela internet.",
        "observacao": "Digitalizar/fotografar os documentos.",
        "fontes": [
          "titulo"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Consultar agendamento local ou iniciar Autoatendimento Eleitoral.",
        "canal_url": "https://www.tse.jus.br/servicos-eleitorais/titulo-eleitoral/titulo-eleitoral-faq",
        "fontes": [
          "titulo"
        ]
      },
      {
        "ordem": 2,
        "acao": "Enviar pedido, acompanhar e comparecer para biometria/conclusão quando orientado.",
        "canal_url": "https://www.tse.jus.br/servicos-eleitorais/titulo-eleitoral/titulo-eleitoral-faq",
        "fontes": [
          "titulo",
          "titulo-doc"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "portal_oficial",
        "nome": "Título Eleitoral — FAQ",
        "url": "https://www.tse.jus.br/servicos-eleitorais/titulo-eleitoral/titulo-eleitoral-faq"
      }
    ],
    "custo": {
      "status": "gratuito",
      "valor_brl": 0,
      "descricao": "Serviço gratuito; multas eventualmente devidas são separadas.",
      "fontes": [
        "titulo-carta"
      ]
    },
    "prazo": {
      "status": "pendente",
      "descricao": "Análise conforme cartório. Cadastro reaberto em 03/11/2026.",
      "fontes": [
        "titulo",
        "titulo-reabre"
      ]
    },
    "observacoes": [],
    "fontes": [
      {
        "id": "titulo",
        "url": "https://www.tse.jus.br/servicos-eleitorais/titulo-eleitoral/titulo-eleitoral-faq",
        "titulo": "Título Eleitoral — FAQ",
        "orgao": "TSE",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "nome",
          "descricao",
          "publico",
          "documentos",
          "passo_a_passo",
          "canais"
        ],
        "limitacoes": []
      },
      {
        "id": "titulo-carta",
        "url": "https://www.tse.jus.br/servicos-eleitorais/servicos/carta-de-servicos-ao-eleitor",
        "titulo": "Carta de serviços ao eleitor",
        "orgao": "TSE",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "condicoes_acesso",
          "custo"
        ],
        "limitacoes": []
      },
      {
        "id": "titulo-reabre",
        "url": "https://www.tse.jus.br/comunicacao/noticias/2026/Novembro/justica-eleitoral-reabre-o-cadastro-eleitoral-nesta-terca-feira-3",
        "titulo": "Reabertura do cadastro eleitoral",
        "orgao": "TSE",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "prazo"
        ],
        "limitacoes": []
      },
      {
        "id": "titulo-doc",
        "url": "https://www.tse.jus.br/comunicacao/noticias/2026/Marco/eleitor-em-dia-confira-quais-documentos-sao-necessarios-para-tirar-o-titulo-ate-6-de-maio",
        "titulo": "Documentos para tirar título",
        "orgao": "TSE",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "documentos",
          "passo_a_passo"
        ],
        "limitacoes": [
          "Datas anteriores à eleição não usadas como prazo atual."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Prazo de conclusão e agenda da zona eleitoral."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "br-quitacao",
    "nome": "Emitir certidão de quitação eleitoral",
    "nomes_populares": [
      "quitação eleitoral",
      "certidão eleitoral"
    ],
    "categoria": "cidadania",
    "abrangencia": "nacional",
    "localidade": {
      "uf": null,
      "municipio": null
    },
    "orgao_responsavel": "Justiça Eleitoral / TSE",
    "descricao": "Obter certidão sobre quitação das obrigações eleitorais.",
    "publico": "Eleitores que atendam às condições de emissão.",
    "condicoes_acesso": [
      "Dados informados devem corresponder ao cadastro eleitoral.",
      "Cumprir obrigações eleitorais aplicáveis, sem impedimentos à quitação; a Justiça Eleitoral verifica o cadastro."
    ],
    "documentos_obrigatorios": [],
    "documentos_status": "nao_se_aplica",
    "documentos_condicionais": [],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Abrir Certidões e acessar Autoatendimento Eleitoral; selecionar quitação.",
        "canal_url": "https://www.tse.jus.br/servicos-eleitorais/certidoes/certidoes",
        "fontes": [
          "quit"
        ]
      },
      {
        "ordem": 2,
        "acao": "Informar CPF ou título, nome, nascimento e filiação; emitir ou procurar a zona eleitoral se houver impedimento.",
        "canal_url": "https://www.tse.jus.br/servicos-eleitorais/certidoes/certidoes",
        "fontes": [
          "quit",
          "quit-carta"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "portal_oficial",
        "nome": "Certidões",
        "url": "https://www.tse.jus.br/servicos-eleitorais/certidoes/certidoes"
      }
    ],
    "custo": {
      "status": "gratuito",
      "valor_brl": 0,
      "descricao": "Gratuito.",
      "fontes": [
        "quit-reabre"
      ]
    },
    "prazo": {
      "status": "com_ressalva",
      "descricao": "Emissão online quando habilitada; pendências exigem atendimento. Retomada em 03/11/2026.",
      "fontes": [
        "quit",
        "quit-reabre"
      ]
    },
    "observacoes": [
      "Também disponível pelo e-Título.",
      "Preencher dados não equivale a anexar documentos."
    ],
    "fontes": [
      {
        "id": "quit",
        "url": "https://www.tse.jus.br/servicos-eleitorais/certidoes/certidoes",
        "titulo": "Certidões",
        "orgao": "TSE",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "nome",
          "descricao",
          "publico",
          "passo_a_passo",
          "canais",
          "prazo",
          "observacoes"
        ],
        "limitacoes": []
      },
      {
        "id": "quit-reabre",
        "url": "https://www.tse.jus.br/comunicacao/noticias/2026/Novembro/justica-eleitoral-reabre-o-cadastro-eleitoral-nesta-terca-feira-3",
        "titulo": "Reabertura do cadastro eleitoral",
        "orgao": "TSE",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "custo",
          "prazo"
        ],
        "limitacoes": []
      },
      {
        "id": "quit-carta",
        "url": "https://www.tse.jus.br/servicos-eleitorais/servicos/carta-de-servicos-ao-eleitor",
        "titulo": "Carta de serviços ao eleitor",
        "orgao": "TSE",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "condicoes_acesso",
          "passo_a_passo"
        ],
        "limitacoes": [
          "Requisitos detalhados devem ser verificados no autoatendimento."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "confirmado",
    "pendencias": [],
    "apto_catalogo": "sim"
  },
  {
    "id": "br-alistamento-militar",
    "nome": "Fazer alistamento militar obrigatório",
    "nomes_populares": [
      "alistamento militar"
    ],
    "categoria": "cidadania",
    "abrangencia": "nacional",
    "localidade": {
      "uf": null,
      "municipio": null
    },
    "orgao_responsavel": "Ministério da Defesa / Forças Armadas; Juntas de Serviço Militar",
    "descricao": "Inscrever-se para as etapas de seleção militar.",
    "publico": "Brasileiros do sexo masculino no ano dos 18 anos; atrasados e naturalizados conforme situação.",
    "condicoes_acesso": [
      "Fluxo de serviço obrigatório masculino; não abrange alistamento feminino voluntário."
    ],
    "documentos_obrigatorios": [],
    "documentos_status": "nao_se_aplica",
    "documentos_condicionais": [
      {
        "documento": "Certidão de nascimento ou prova de naturalização/opção",
        "quando": "Alistamento presencial.",
        "observacao": "Identificação com foto é recomendada na carta, sem universalizá-la como obrigatória.",
        "fontes": [
          "mil-alist"
        ]
      },
      {
        "documento": "Comprovante de residência ou declaração",
        "quando": "Alistamento presencial.",
        "observacao": "Online: preencher dados pessoais.",
        "fontes": [
          "mil-alist"
        ]
      },
      {
        "documento": "Comprovação de condição especial",
        "quando": "Arrimo de família ou situação que demande análise.",
        "observacao": "Consultar Junta; deficiência não dispensa automaticamente alistamento.",
        "fontes": [
          "mil-alist"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "No ano dos 18 anos, alistar-se de janeiro a junho; fora do período, procurar Junta.",
        "canal_url": "https://www.gov.br/pt-br/servicos/alistar-se-no-servico-militar-obrigatorio",
        "fontes": [
          "mil-alist"
        ]
      },
      {
        "ordem": 2,
        "acao": "Acompanhar situação e comparecer quando convocado.",
        "canal_url": "https://www.gov.br/pt-br/servicos/alistar-se-no-servico-militar-obrigatorio",
        "fontes": [
          "mil-alist"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "portal_oficial",
        "nome": "Serviço Militar Obrigatório",
        "url": "https://www.gov.br/pt-br/servicos/alistar-se-no-servico-militar-obrigatorio"
      }
    ],
    "custo": {
      "status": "pendente",
      "valor_brl": null,
      "descricao": "Taxas/multas dependem da situação; valor não consolidado para esta etapa.",
      "fontes": [
        "mil-alist"
      ]
    },
    "prazo": {
      "status": "com_ressalva",
      "descricao": "Alistamento: janeiro a junho; seleção e regularização têm calendário próprio.",
      "fontes": [
        "mil-alist"
      ]
    },
    "observacoes": [
      "Serviço nacional com atendimento local nas Juntas.",
      "Alistamento não é emissão de Certificado de Dispensa."
    ],
    "fontes": [
      {
        "id": "mil-alist",
        "url": "https://www.gov.br/pt-br/servicos/alistar-se-no-servico-militar-obrigatorio",
        "titulo": "Serviço Militar Obrigatório",
        "orgao": "Ministério da Defesa",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "nome",
          "descricao",
          "publico",
          "documentos",
          "passo_a_passo",
          "canais",
          "prazo",
          "observacoes"
        ],
        "limitacoes": []
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Custos de atraso e situações especiais; agenda local."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "br-certificado-dispensa",
    "nome": "Obter Certificado de Dispensa de Incorporação",
    "nomes_populares": [
      "CDI",
      "certificado militar",
      "dispensa militar"
    ],
    "categoria": "cidadania",
    "abrangencia": "nacional",
    "localidade": {
      "uf": null,
      "municipio": null
    },
    "orgao_responsavel": "Ministério da Defesa / Exército; Juntas de Serviço Militar",
    "descricao": "Obter certificado após dispensa do serviço militar.",
    "publico": "Cidadão alistado e dispensado.",
    "condicoes_acesso": [
      "Cumprir dispensa, pagamento aplicável e juramento à Bandeira."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "Identidade",
        "observacao": "Para atendimento.",
        "fontes": [
          "mil-cdi"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "Comprovante da taxa militar",
        "quando": "Pagamento por GRU.",
        "observacao": "Seguir confirmação oficial de pagamento.",
        "fontes": [
          "mil-cdi"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Acessar Emita seu certificado e requerer dispensa; pagar taxa aplicável.",
        "canal_url": "https://www.gov.br/defesa/pt-br/carta-de-servico/servico-militar-obrigatorio-smo",
        "fontes": [
          "mil-def"
        ]
      },
      {
        "ordem": 2,
        "acao": "Realizar juramento presencial na Junta e emitir o certificado.",
        "canal_url": "https://www.gov.br/defesa/pt-br/carta-de-servico/servico-militar-obrigatorio-smo",
        "fontes": [
          "mil-def"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "portal_oficial",
        "nome": "Carta de Serviço Militar Obrigatório",
        "url": "https://www.gov.br/defesa/pt-br/carta-de-servico/servico-militar-obrigatorio-smo"
      }
    ],
    "custo": {
      "status": "pago",
      "valor_brl": null,
      "descricao": "Há taxa reajustada trimestralmente; R$ 6,38 na carta não foi confirmado como valor do trimestre atual.",
      "fontes": [
        "mil-cdi",
        "mil-def"
      ]
    },
    "prazo": {
      "status": "pendente",
      "descricao": "Depende do pagamento, juramento e disponibilização; confirmar na Junta.",
      "fontes": [
        "mil-cdi",
        "mil-def"
      ]
    },
    "observacoes": [
      "CDI não é certificado de reservista nem certificado de alistamento."
    ],
    "fontes": [
      {
        "id": "mil-cdi",
        "url": "https://www.gov.br/pt-br/servicos/alistar-se-no-servico-militar-obrigatorio",
        "titulo": "Serviço Militar Obrigatório — etapa de dispensa",
        "orgao": "Ministério da Defesa",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "nome",
          "descricao",
          "publico",
          "condicoes_acesso",
          "documentos",
          "custo"
        ],
        "limitacoes": []
      },
      {
        "id": "mil-def",
        "url": "https://www.gov.br/defesa/pt-br/carta-de-servico/servico-militar-obrigatorio-smo",
        "titulo": "Carta de Serviço Militar Obrigatório",
        "orgao": "Ministério da Defesa",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "passo_a_passo",
          "canais",
          "custo",
          "prazo"
        ],
        "limitacoes": [
          "Página publicada em 30/06/2026; taxa expressamente reajustável trimestralmente."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Taxa vigente, possibilidade de isenção e prazo local; segunda via de reservista exige ficha própria."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "br-seguro-desemprego-formal",
    "nome": "Solicitar seguro-desemprego do trabalhador formal",
    "nomes_populares": [
      "seguro-desemprego"
    ],
    "categoria": "trabalho",
    "abrangencia": "nacional",
    "localidade": {
      "uf": null,
      "municipio": null
    },
    "orgao_responsavel": "Ministério do Trabalho e Emprego",
    "descricao": "Solicitar assistência financeira temporária após dispensa.",
    "publico": "Trabalhador formal dispensado sem justa causa e desempregado.",
    "condicoes_acesso": [
      "Sem renda suficiente para sustento; respeitar incompatibilidades de benefícios.",
      "Salários: 12 de 18 meses na primeira solicitação; 9 de 12 na segunda; seis meses nas demais."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "Requerimento do Seguro-Desemprego",
        "observacao": "Entregue pelo empregador na dispensa.",
        "fontes": [
          "seguro"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Com CPF e requerimento, solicitar pela CTPS Digital/portal oficial.",
        "canal_url": "https://www.gov.br/pt-br/servicos/solicitar-o-seguro-desemprego",
        "fontes": [
          "seguro"
        ]
      },
      {
        "ordem": 2,
        "acao": "Acompanhar análise, parcelas e eventuais exigências; usar atendimento 158 quando necessário.",
        "canal_url": "https://www.gov.br/pt-br/servicos/solicitar-o-seguro-desemprego",
        "fontes": [
          "seguro"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "portal_oficial",
        "nome": "Solicitar o Seguro-Desemprego",
        "url": "https://www.gov.br/pt-br/servicos/solicitar-o-seguro-desemprego"
      }
    ],
    "custo": {
      "status": "gratuito",
      "valor_brl": 0,
      "descricao": "Gratuito.",
      "fontes": [
        "seguro"
      ]
    },
    "prazo": {
      "status": "com_ressalva",
      "descricao": "Pedido: do 7º ao 120º dia após dispensa. Portal estima prestação em 31–60 dias, sujeita à análise.",
      "fontes": [
        "seguro",
        "seguro-faq"
      ]
    },
    "observacoes": [
      "Ficha exclusiva do trabalhador formal; domésticos e outras modalidades têm regras próprias.",
      "Fontes divergem ao listar exceções de benefícios previdenciários; caso concreto deve ser conferido no MTE."
    ],
    "fontes": [
      {
        "id": "seguro",
        "url": "https://www.gov.br/pt-br/servicos/solicitar-o-seguro-desemprego",
        "titulo": "Solicitar o Seguro-Desemprego",
        "orgao": "MTE",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "nome",
          "descricao",
          "publico",
          "condicoes_acesso",
          "documentos",
          "passo_a_passo",
          "canais",
          "custo",
          "prazo"
        ],
        "limitacoes": [
          "Carta atualizada em 25/09/2026."
        ]
      },
      {
        "id": "seguro-faq",
        "url": "https://www.gov.br/pt-br/temas/perguntas-frequentes-seguro-desemprego",
        "titulo": "Perguntas Frequentes — Seguro-Desemprego",
        "orgao": "Governo Federal / MTE",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "publico",
          "condicoes_acesso",
          "prazo",
          "observacoes"
        ],
        "limitacoes": [
          "Há trechos antigos sobre canais de domésticos; não usados nesta ficha."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Confirmar incompatibilidades/exceções de benefícios previdenciários; documentos de eventual exigência dependem do motivo."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "br-primeira-habilitacao",
    "nome": "Solicitar a primeira habilitação (CNH do Brasil)",
    "nomes_populares": [
      "primeira CNH",
      "tirar a carteira de motorista",
      "tirar habilitação",
      "CNH do Brasil",
      "primeira habilitação",
      "tirar CNH",
      "tirar a CNH",
      "carteira de motorista",
      "habilitação"
    ],
    "categoria": "habilitacao",
    "abrangencia": "nacional",
    "localidade": {
      "uf": null,
      "municipio": null
    },
    "orgao_responsavel": "Ministério dos Transportes (Senatran) e Detrans estaduais",
    "descricao": "Abrir pelo aplicativo CNH do Brasil o processo da primeira habilitação (carro e/ou moto), com curso teórico gratuito. Exames, taxas e emissão são feitos no Detran do estado escolhido.",
    "publico": "Pessoas que ainda não têm habilitação.",
    "condicoes_acesso": [
      "Conta gov.br para entrar no aplicativo CNH do Brasil.",
      "O sistema identifica sozinho quem ainda não tem habilitação e mostra, na área Condutor, a opção Requerimento da Primeira Habilitação.",
      "O candidato escolhe a categoria (carro e/ou moto) e o estado em que fará os exames e emitirá a habilitação."
    ],
    "documentos_obrigatorios": [],
    "documentos_status": "pendente",
    "documentos_condicionais": [],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Baixar o aplicativo CNH do Brasil (Google Play ou App Store) e entrar com a conta gov.br. Quem tinha a Carteira Digital de Trânsito deve atualizar o aplicativo.",
        "canal_url": "https://www.gov.br/transportes/pt-br/assuntos/noticias/2025/12/cnh-do-brasil-como-solicitar-a-primeira-habilitacao-pelo-aplicativo",
        "fontes": [
          "cnh-mt-dez25"
        ]
      },
      {
        "ordem": 2,
        "acao": "Em Condutor, abrir o Requerimento da Primeira Habilitação, conferir os dados trazidos do gov.br e escolher a categoria e o estado.",
        "canal_url": "https://www.gov.br/transportes/pt-br/assuntos/noticias/2025/12/cnh-do-brasil-como-solicitar-a-primeira-habilitacao-pelo-aplicativo",
        "fontes": [
          "cnh-mt-dez25"
        ]
      },
      {
        "ordem": 3,
        "acao": "Fazer o curso teórico gratuito no aplicativo (ou em autoescola). O certificado é registrado automaticamente no Sistema Nacional de Trânsito.",
        "canal_url": "https://www.gov.br/transportes/pt-br/assuntos/noticias/2025/12/cnh-do-brasil-como-solicitar-a-primeira-habilitacao-pelo-aplicativo",
        "fontes": [
          "cnh-mt-dez25",
          "cnh-mt-mar26"
        ]
      },
      {
        "ordem": 4,
        "acao": "Fazer a coleta biométrica e os exames de aptidão física e mental e a avaliação psicológica, conforme as regras do Detran do estado.",
        "canal_url": "https://www.gov.br/transportes/pt-br/assuntos/noticias/2025/12/cnh-do-brasil-como-solicitar-a-primeira-habilitacao-pelo-aplicativo",
        "fontes": [
          "cnh-mt-dez25"
        ]
      },
      {
        "ordem": 5,
        "acao": "Agendar e fazer o exame teórico no Detran: 30 questões de múltipla escolha, com mínimo de 20 acertos.",
        "canal_url": "https://www.gov.br/transportes/pt-br/assuntos/noticias/2025/12/cnh-do-brasil-como-solicitar-a-primeira-habilitacao-pelo-aplicativo",
        "fontes": [
          "cnh-mt-dez25"
        ]
      },
      {
        "ordem": 6,
        "acao": "Fazer o curso prático com autoescola ou instrutor autorizado pelo Detran e, depois, o exame prático de direção.",
        "canal_url": "https://www.gov.br/transportes/pt-br/assuntos/noticias/2025/12/cnh-do-brasil-como-solicitar-a-primeira-habilitacao-pelo-aplicativo",
        "fontes": [
          "cnh-mt-dez25",
          "cnh-mt-mar26"
        ]
      },
      {
        "ordem": 7,
        "acao": "Com a aprovação, receber a Permissão para Dirigir (PPD), válida por um ano, no aplicativo; a CNH digital pode ser baixada em Ver Habilitação > Baixar CNH-e.",
        "canal_url": "https://www.gov.br/transportes/pt-br/assuntos/noticias/2025/12/cnh-do-brasil-como-solicitar-a-primeira-habilitacao-pelo-aplicativo",
        "fontes": [
          "cnh-mt-dez25"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "aplicativo_oficial",
        "nome": "Aplicativo CNH do Brasil (Ministério dos Transportes)",
        "url": "https://www.gov.br/transportes/pt-br/assuntos/noticias/2025/12/cnh-do-brasil-como-solicitar-a-primeira-habilitacao-pelo-aplicativo"
      },
      {
        "tipo": "orgao",
        "nome": "Detran do estado escolhido (exames, taxas, emissão)",
        "url": null
      }
    ],
    "custo": {
      "status": "variavel",
      "valor_brl": null,
      "descricao": "Cadastro, acesso à plataforma e curso teórico são gratuitos. Taxas de exames e de emissão da carteira física são cobradas pelo Detran do estado e variam; esta ficha não traz o valor de cada estado.",
      "fontes": [
        "cnh-mt-mar26"
      ]
    },
    "prazo": {
      "status": "pendente",
      "descricao": "Sem prazo único: depende das etapas, da agenda do Detran e do ritmo do candidato. A PPD vale por um ano.",
      "fontes": [
        "cnh-mt-dez25"
      ]
    },
    "observacoes": [
      "Pode-se estudar só pela plataforma digital, só em autoescola ou combinar as duas formas.",
      "O Ministério dos Transportes diz que não oferece serviços por SMS, e-mail, redes sociais ou telefone. Confirme se o site ou aplicativo é oficial antes de informar dados.",
      "A CNH-e tem a mesma validade jurídica da versão impressa.",
      "O Senatran oferece, no portal de serviços, uma ferramenta para validar a autenticidade de uma CNH."
    ],
    "fontes": [
      {
        "id": "cnh-mt-dez25",
        "url": "https://www.gov.br/transportes/pt-br/assuntos/noticias/2025/12/cnh-do-brasil-como-solicitar-a-primeira-habilitacao-pelo-aplicativo",
        "titulo": "CNH do Brasil: como solicitar a primeira habilitação pelo aplicativo",
        "orgao": "Ministério dos Transportes",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "nome",
          "descricao",
          "condicoes_acesso",
          "passo_a_passo",
          "prazo",
          "observacoes"
        ],
        "limitacoes": [
          "Página de notícia do órgão (não é a ficha de serviço); regras de taxas e documentos por estado não constam do texto."
        ]
      },
      {
        "id": "cnh-mt-mar26",
        "url": "https://www.gov.br/transportes/pt-br/assuntos/noticias/2026/03/cnh-do-brasil-saiba-como-solicitar-a-primeira-habilitacao-pelo-aplicativo-oficial-e-evite-canais-nao-autorizados",
        "titulo": "CNH do Brasil: saiba como solicitar a primeira habilitação pelo aplicativo oficial e evite canais não autorizados",
        "orgao": "Ministério dos Transportes",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "custo",
          "canais",
          "observacoes"
        ],
        "limitacoes": [
          "Página de notícia do órgão (não é a ficha de serviço); regras de taxas e documentos por estado não constam do texto."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Taxas de cada Detran (exames, emissão, PPD) não foram lidas; consultar o Detran do estado.",
      "Documentos exigidos pelo Detran, idade mínima e regras de aulas práticas não constam das páginas lidas.",
      "A ficha oficial de serviço no gov.br não foi localizada; o conteúdo vem de notícias do Ministério dos Transportes (alteradas em 03/07/2026)."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "br-mei-inscricao",
    "nome": "Cadastrar/formalizar Microempreendedor Individual (MEI)",
    "nomes_populares": [
      "abrir MEI",
      "CNPJ MEI",
      "inscrição de MEI",
      "cadastro MEI",
      "virar MEI"
    ],
    "categoria": "trabalho",
    "abrangencia": "nacional",
    "localidade": {
      "uf": null,
      "municipio": null
    },
    "orgao_responsavel": "Ministério do Empreendedorismo, da Microempresa e da Empresa de Pequeno Porte (MEMP)",
    "descricao": "Formalizar a atividade como MEI para obter CNPJ, emitir nota fiscal, vender para o governo, acessar serviços bancários específicos, pagar tributos simplificados e contribuir para a previdência.",
    "publico": "Pessoa que queira se formalizar como MEI e atenda às condições abaixo.",
    "condicoes_acesso": [
      "Exercer ao menos uma atividade das Tabelas A e B do Anexo XI da Resolução CGSN nº 140/2018.",
      "Faturamento limitado a R$ 81.000,00 por ano (atividades da Tabela A) ou R$ 251.600,00 por ano (Tabela B), conforme a fonte.",
      "Não participar como sócio, administrador ou titular de outra empresa.",
      "Contratar no máximo um empregado.",
      "Conta gov.br nível prata ou ouro (brasileiros) ou bronze (estrangeiros)."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "Conta gov.br com nível de segurança adequado",
        "observacao": "Prata ou ouro para brasileiros; bronze para estrangeiros.",
        "fontes": [
          "mei-api"
        ]
      },
      {
        "documento": "RG",
        "observacao": "Citado na lista de documentos do serviço.",
        "fontes": [
          "mei-api"
        ]
      },
      {
        "documento": "Dados de contato e endereço",
        "observacao": "",
        "fontes": [
          "mei-api"
        ]
      },
      {
        "documento": "Dados do negócio",
        "observacao": "Tipo de atividade econômica, forma de atuação e local onde o negócio é realizado.",
        "fontes": [
          "mei-api"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "País de nacionalidade (conforme CPF) e dados de identificação civil do cadastro da Polícia Federal",
        "quando": "Estrangeiro com conta gov.br nível bronze.",
        "observacao": "Aceitos: Carteira Nacional de Registro Migratório, Documento Provisório de Registro Nacional Migratório ou Protocolo de Solicitação de Refúgio.",
        "fontes": [
          "mei-api"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Acessar o Portal do Empreendedor e escolher o tema Quero Ser MEI.",
        "canal_url": "https://www.gov.br/pt-br/servicos/realizar-registro-como-microempreendedor-individual-mei",
        "fontes": [
          "mei-api"
        ]
      },
      {
        "ordem": 2,
        "acao": "Abrir o card Formalize-se e entrar com a conta gov.br.",
        "canal_url": "https://www.gov.br/pt-br/servicos/realizar-registro-como-microempreendedor-individual-mei",
        "fontes": [
          "mei-api"
        ]
      },
      {
        "ordem": 3,
        "acao": "Preencher o formulário de inscrição de MEI.",
        "canal_url": "https://www.gov.br/pt-br/servicos/realizar-registro-como-microempreendedor-individual-mei",
        "fontes": [
          "mei-api"
        ]
      },
      {
        "ordem": 4,
        "acao": "Assinalar as declarações e finalizar a inscrição.",
        "canal_url": "https://www.gov.br/pt-br/servicos/realizar-registro-como-microempreendedor-individual-mei",
        "fontes": [
          "mei-api"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "portal_oficial",
        "nome": "Portal do Empreendedor (Formalize-se)",
        "url": "https://www.gov.br/empresas-e-negocios/pt-br/empreendedor"
      },
      {
        "tipo": "servico_digital",
        "nome": "Inscrição de MEI (Receita Federal)",
        "url": "https://mei.receita.economia.gov.br/inscricao/login"
      }
    ],
    "custo": {
      "status": "gratuito",
      "valor_brl": 0,
      "descricao": "A inscrição é gratuita. Depois da formalização o MEI paga tributos simplificados; o valor mensal não consta da fonte lida.",
      "fontes": [
        "mei-api"
      ]
    },
    "prazo": {
      "status": "pendente",
      "descricao": "A fonte não estima o prazo.",
      "fontes": [
        "mei-api"
      ]
    },
    "observacoes": [
      "O serviço é 100% digital.",
      "Confira se a sua atividade está na lista permitida antes de começar."
    ],
    "fontes": [
      {
        "id": "mei-api",
        "url": "https://www.servicos.gov.br/api/v1/servicos/9435",
        "titulo": "Cadastrar/formalizar Microempreendedor Individual (registro na API de Serviços do gov.br)",
        "orgao": "MEMP / Governo Digital",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "documento_lido",
        "sustenta": [
          "nome",
          "descricao",
          "publico",
          "condicoes_acesso",
          "documentos",
          "passo_a_passo",
          "canais",
          "custo"
        ],
        "limitacoes": [
          "Registro estruturado da API; não comprova a versão exibida hoje na tela do portal."
        ]
      },
      {
        "id": "mei-gov",
        "url": "https://www.gov.br/pt-br/servicos/realizar-registro-como-microempreendedor-individual-mei",
        "titulo": "Cadastrar/formalizar Microempreendedor Individual",
        "orgao": "gov.br",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "nome",
          "descricao"
        ],
        "limitacoes": [
          "Seções de requisitos e etapas ficam recolhidas na página; foram lidas pela API. Última modificação informada: 15/12/2025."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "confirmado",
    "pendencias": [
      "Valor atual do DAS mensal e limites de faturamento vigentes devem ser conferidos no Portal do Empreendedor.",
      "Regras de licença municipal para o endereço do negócio não foram lidas."
    ],
    "apto_catalogo": "sim"
  },
  {
    "id": "br-antecedentes-criminais",
    "nome": "Emitir certidão de antecedentes criminais (Polícia Federal)",
    "nomes_populares": [
      "nada consta",
      "certidão de antecedentes",
      "antecedentes criminais",
      "certidão negativa criminal"
    ],
    "categoria": "documentacao_civil",
    "abrangencia": "nacional",
    "localidade": {
      "uf": null,
      "municipio": null
    },
    "orgao_responsavel": "Polícia Federal",
    "descricao": "Certidão que informa a existência de registros criminais nos sistemas da Polícia Federal. Para fins civis, retorna NADA CONSTA quando não há decisão condenatória com trânsito em julgado.",
    "publico": "Todos os cidadãos.",
    "condicoes_acesso": [],
    "documentos_obrigatorios": [],
    "documentos_status": "nao_se_aplica",
    "documentos_condicionais": [],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Acessar o sistema ePol SINIC Público da Polícia Federal e preencher o formulário.",
        "canal_url": "https://servicos.pf.gov.br/epol-sinic-publico/",
        "fontes": [
          "cac-api"
        ]
      },
      {
        "ordem": 2,
        "acao": "Se preferir atendimento presencial, procurar uma unidade da Polícia Federal. Dias, horários e necessidade de agendamento variam por unidade.",
        "canal_url": "https://www.gov.br/pf/pt-br/acesso-a-informacao/institucional/quem-e-quem/superintendencias-e-delegacias",
        "fontes": [
          "cac-api"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "servico_digital",
        "nome": "ePol SINIC Público — Polícia Federal",
        "url": "https://servicos.pf.gov.br/epol-sinic-publico/"
      },
      {
        "tipo": "presencial",
        "nome": "Unidades descentralizadas da Polícia Federal",
        "url": "https://www.gov.br/pf/pt-br/acesso-a-informacao/institucional/quem-e-quem/superintendencias-e-delegacias"
      }
    ],
    "custo": {
      "status": "gratuito",
      "valor_brl": 0,
      "descricao": "Gratuito.",
      "fontes": [
        "cac-api",
        "cac-pf"
      ]
    },
    "prazo": {
      "status": "confirmado",
      "descricao": "Atendimento imediato pela internet, segundo o cadastro do serviço. A certidão emitida vale por 90 dias.",
      "fontes": [
        "cac-api",
        "cac-pf"
      ]
    },
    "observacoes": [
      "O serviço não emite certidão de consta: essa informação depende de confirmação presencial na Polícia Federal, por causa dos homônimos.",
      "O sistema da PF não reúne 100% das informações das Justiças estaduais e Polícias Civis; para antecedentes estaduais pode ser preciso pedir certidão em cada órgão.",
      "A PF oferece o serviço Validar Certidão de Antecedentes Criminais.",
      "Em caso de erro no sistema, escrever para suporte.sinic@pf.gov.br com a descrição do erro."
    ],
    "fontes": [
      {
        "id": "cac-api",
        "url": "https://www.servicos.gov.br/api/v1/servicos/788",
        "titulo": "Emitir Certidão de Antecedentes Criminais (registro na API de Serviços do gov.br)",
        "orgao": "Polícia Federal",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "documento_lido",
        "sustenta": [
          "nome",
          "descricao",
          "publico",
          "passo_a_passo",
          "canais",
          "custo",
          "prazo",
          "observacoes"
        ],
        "limitacoes": [
          "Registro estruturado da API; as etapas listam apenas Preencher o formulário."
        ]
      },
      {
        "id": "cac-pf",
        "url": "https://www.gov.br/pf/pt-br/assuntos/antecedentes-criminais",
        "titulo": "Antecedentes Criminais — Polícia Federal",
        "orgao": "Polícia Federal",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "descricao",
          "custo",
          "prazo"
        ],
        "limitacoes": []
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "confirmado",
    "pendencias": [
      "Campos exatos do formulário e o que fazer quando a emissão imediata não ocorre não foram lidos; seguir a orientação do sistema da PF."
    ],
    "apto_catalogo": "sim"
  },
  {
    "id": "br-fgts-saque",
    "nome": "Consultar e sacar o FGTS",
    "nomes_populares": [
      "FGTS",
      "Fundo de Garantia",
      "saque do FGTS",
      "extrato do FGTS",
      "contas inativas do FGTS"
    ],
    "categoria": "trabalho",
    "abrangencia": "nacional",
    "localidade": {
      "uf": null,
      "municipio": null
    },
    "orgao_responsavel": "Caixa Econômica Federal (CAIXA)",
    "descricao": "Consultar saldo e pedir o saque do FGTS pelo aplicativo FGTS, sem ir à agência, quando houver direito ao saque.",
    "publico": "Trabalhadores com contrato regido pela CLT, domésticos, rurais, temporários, intermitentes, avulsos, safreiros, atletas profissionais e diretores não empregados (critério do empregador).",
    "condicoes_acesso": [
      "O saque exige uma situação prevista em lei, como dispensa sem justa causa, aposentadoria, término de contrato por prazo determinado, falecimento do empregador individual ou nulidade do contrato, ou falecimento do trabalhador.",
      "Outras situações de saque estão no Portal do FGTS."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "Documento oficial de identificação com foto",
        "observacao": "",
        "fontes": [
          "fgts-api"
        ]
      },
      {
        "documento": "Carteira de Trabalho e Previdência Social",
        "observacao": "",
        "fontes": [
          "fgts-api"
        ]
      },
      {
        "documento": "Número de inscrição no PIS/PASEP",
        "observacao": "",
        "fontes": [
          "fgts-api"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Baixar o aplicativo FGTS da CAIXA e consultar o saldo. O app também permite alterar dados cadastrais e pedir o saque.",
        "canal_url": "https://www.caixa.gov.br/atendimento/aplicativos/fgts/Paginas/default.aspx",
        "fontes": [
          "fgts-api"
        ]
      },
      {
        "ordem": 2,
        "acao": "Indicar no aplicativo uma conta da CAIXA ou de outro banco para receber o valor, enviar os documentos pelo próprio app e acompanhar o pedido.",
        "canal_url": "https://www.caixa.gov.br/atendimento/aplicativos/fgts/Paginas/default.aspx",
        "fontes": [
          "fgts-api"
        ]
      },
      {
        "ordem": 3,
        "acao": "Receber o valor na conta informada, se a documentação estiver regular e houver direito ao saque.",
        "canal_url": "https://www.caixa.gov.br/atendimento/aplicativos/fgts/Paginas/default.aspx",
        "fontes": [
          "fgts-api"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "aplicativo_oficial",
        "nome": "Aplicativo FGTS (CAIXA)",
        "url": "https://www.caixa.gov.br/atendimento/aplicativos/fgts/Paginas/default.aspx"
      },
      {
        "tipo": "presencial",
        "nome": "Rede de atendimento da CAIXA (espera estimada de cerca de 2 horas)",
        "url": "https://www.caixa.gov.br/atendimento/Paginas/default.aspx"
      }
    ],
    "custo": {
      "status": "gratuito",
      "valor_brl": 0,
      "descricao": "Gratuito; o crédito em conta indicada no aplicativo é feito sem custo.",
      "fontes": [
        "fgts-api"
      ]
    },
    "prazo": {
      "status": "confirmado",
      "descricao": "Crédito em até 5 dias úteis após o pedido, com documentação regular e direito ao saque.",
      "fontes": [
        "fgts-api"
      ]
    },
    "observacoes": [
      "O pedido pode ser 100% digital, sem ir à agência da CAIXA.",
      "Detalhes de documentos específicos de cada tipo de saque ficam no site da CAIXA."
    ],
    "fontes": [
      {
        "id": "fgts-api",
        "url": "https://www.servicos.gov.br/api/v1/servicos/61",
        "titulo": "Sacar o FGTS (registro na API de Serviços do gov.br)",
        "orgao": "CAIXA",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "documento_lido",
        "sustenta": [
          "nome",
          "descricao",
          "publico",
          "condicoes_acesso",
          "documentos",
          "passo_a_passo",
          "canais",
          "custo",
          "prazo"
        ],
        "limitacoes": [
          "Registro estruturado da API; não comprova a versão exibida hoje na tela do portal."
        ]
      },
      {
        "id": "fgts-gov",
        "url": "https://www.gov.br/pt-br/servicos/sacar-o-fgts",
        "titulo": "Sacar o FGTS",
        "orgao": "gov.br",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "trecho_indexado",
        "sustenta": [
          "nome"
        ],
        "limitacoes": [
          "Indicada como página do serviço; o conteúdo detalhado foi lido pela API."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "confirmado",
    "pendencias": [
      "Regras de saque-aniversário e de saques extraordinários (que mudam com medidas do governo) não foram lidas; conferir no aplicativo FGTS."
    ],
    "apto_catalogo": "sim"
  },
  {
    "id": "br-bolsa-familia",
    "nome": "Receber o Bolsa Família",
    "nomes_populares": [
      "Bolsa Família",
      "Programa Bolsa Família",
      "auxílio",
      "benefício do governo"
    ],
    "categoria": "assistencia_social",
    "abrangencia": "nacional",
    "localidade": {
      "uf": null,
      "municipio": null
    },
    "orgao_responsavel": "Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome (MDS); pagamento pela CAIXA",
    "descricao": "Programa de transferência de renda para famílias em situação de pobreza. A família entra pelo Cadastro Único e é analisada por um sistema informatizado.",
    "publico": "Famílias com renda mensal por pessoa de até R$ 218, inscritas no Cadastro Único.",
    "condicoes_acesso": [
      "Renda mensal por pessoa (renda da família dividida pelo número de pessoas) de até R$ 218.",
      "Pode receber mesmo com carteira assinada, sendo MEI ou com outra renda, se a renda por pessoa estiver no limite.",
      "Inscrição no Cadastro Único e análise do sistema informatizado.",
      "A entrada não é automática: o Governo Federal considera o limite orçamentário do programa."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "Documentos do Cadastro Único",
        "observacao": "A página remete ao serviço Inscrever-se no Cadastro Único para a lista de documentos.",
        "fontes": [
          "bf-gov"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "Comprovantes da justificativa (cartão de vacina, declaração da escola etc.)",
        "quando": "Recurso por descumprimento das condicionalidades de saúde e educação.",
        "observacao": "Sem comprovante ainda é possível apresentar o recurso.",
        "fontes": [
          "bf-gov"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Inscrever a família no Cadastro Único, presencialmente, no CRAS, posto do Cadastro Único ou setor responsável pelo Bolsa Família do município.",
        "canal_url": "https://www.gov.br/pt-br/servicos/receber-o-bolsa-familia",
        "fontes": [
          "bf-gov"
        ]
      },
      {
        "ordem": 2,
        "acao": "Aguardar a análise. Se for selecionada, a família recebe pelos Correios o cartão do Bolsa Família, emitido pela CAIXA em nome do responsável familiar.",
        "canal_url": "https://www.gov.br/pt-br/servicos/receber-o-bolsa-familia",
        "fontes": [
          "bf-gov"
        ]
      },
      {
        "ordem": 3,
        "acao": "Receber o benefício mensal em lotéricas, CAIXA Aqui ou conta da CAIXA. Cada parcela deve ser sacada em até 120 dias. O aplicativo do Bolsa Família mostra o benefício e o calendário.",
        "canal_url": "https://www.gov.br/pt-br/servicos/receber-o-bolsa-familia",
        "fontes": [
          "bf-gov"
        ]
      },
      {
        "ordem": 4,
        "acao": "Cumprir os compromissos de saúde e educação: frequência escolar mínima de 60% (4 e 5 anos) e de 75% (6 a 18 anos incompletos), vacinação e acompanhamento nutricional de crianças menores de 7 anos e pré-natal das gestantes.",
        "canal_url": "https://www.gov.br/pt-br/servicos/receber-o-bolsa-familia",
        "fontes": [
          "bf-gov"
        ]
      },
      {
        "ordem": 5,
        "acao": "Se não conseguir cumprir, apresentar recurso no setor do Bolsa Família do município ou procurar o CRAS/CREAS.",
        "canal_url": "https://www.gov.br/pt-br/servicos/receber-o-bolsa-familia",
        "fontes": [
          "bf-gov"
        ]
      },
      {
        "ordem": 6,
        "acao": "Manter o Cadastro Único atualizado a cada dois anos ou sempre que houver mudança na família.",
        "canal_url": "https://www.gov.br/pt-br/servicos/receber-o-bolsa-familia",
        "fontes": [
          "bf-gov"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "portal_oficial",
        "nome": "Receber o Bolsa Família (gov.br)",
        "url": "https://www.gov.br/pt-br/servicos/receber-o-bolsa-familia"
      },
      {
        "tipo": "presencial",
        "nome": "CRAS, posto do Cadastro Único ou setor do Bolsa Família do município (espera estimada de até 1 hora)",
        "url": null
      },
      {
        "tipo": "aplicativo_oficial",
        "nome": "Aplicativo do Bolsa Família (CAIXA)",
        "url": null
      }
    ],
    "custo": {
      "status": "pendente",
      "valor_brl": null,
      "descricao": "A página lida não menciona cobrança de taxa; confirmar no CRAS ao fazer o Cadastro Único.",
      "fontes": [
        "bf-gov"
      ]
    },
    "prazo": {
      "status": "pendente",
      "descricao": "A página não estima o prazo. A entrada depende da análise do sistema e do limite orçamentário.",
      "fontes": [
        "bf-gov"
      ]
    },
    "observacoes": [
      "Valores informados na página (última modificação em 18/05/2026): R$ 142,00 por integrante (Renda de Cidadania); Benefício Complementar para famílias que receberem menos de R$ 600,00 no total; R$ 150,00 por criança de 0 a 7 anos incompletos; R$ 50,00 por gestante, nutriz ou criança e adolescente de 7 a 18 anos incompletos.",
      "Cada município define seus protocolos de atendimento."
    ],
    "fontes": [
      {
        "id": "bf-gov",
        "url": "https://www.gov.br/pt-br/servicos/receber-o-bolsa-familia",
        "titulo": "Receber o Bolsa Família",
        "orgao": "gov.br",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "nome",
          "descricao",
          "publico",
          "condicoes_acesso",
          "passo_a_passo",
          "canais",
          "observacoes"
        ],
        "limitacoes": [
          "Página marcada como Nova; avaliação não implementada. Tempos de duração das etapas aparecem como não estimados."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Lista de documentos do Cadastro Único não foi lida nesta ficha; ver ficha br-cadunico.",
      "Custo e prazo não informados pela página."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "br-pe-de-meia",
    "nome": "Participar do Pé-de-Meia (poupança do ensino médio)",
    "nomes_populares": [
      "Pé-de-Meia",
      "poupança do ensino médio",
      "bolsa para estudante",
      "Caixa Tem Pé-de-Meia",
      "pe de meia"
    ],
    "categoria": "educacao",
    "abrangencia": "nacional",
    "localidade": {
      "uf": null,
      "municipio": null
    },
    "orgao_responsavel": "Ministério da Educação (MEC); conta e pagamento pela CAIXA",
    "descricao": "Incentivo financeiro na forma de poupança para estudantes do ensino médio público, para estimular a permanência e a conclusão escolar. Não há inscrição: o MEC cruza matrícula e Cadastro Único.",
    "publico": "Estudantes do ensino médio regular público (14 a 24 anos) ou da EJA pública (19 a 24 anos), de família inscrita no Cadastro Único.",
    "condicoes_acesso": [
      "Matrícula no ensino médio regular (14 a 24 anos) ou na EJA (19 a 24 anos) em rede pública.",
      "Família inscrita no Cadastro Único, com renda de até meio salário mínimo por pessoa. Em 2026 o MEC verifica os dados do CadÚnico incluídos até 7 de agosto de 2026.",
      "CPF regular.",
      "Frequência escolar mínima de 80% para receber as parcelas mensais."
    ],
    "documentos_obrigatorios": [],
    "documentos_status": "nao_se_aplica",
    "documentos_condicionais": [
      {
        "documento": "Autorização do responsável legal para movimentar a conta",
        "quando": "Estudante com menos de 18 anos.",
        "observacao": "A mãe ou o pai autoriza pelo aplicativo Caixa Tem; demais responsáveis legais fazem o procedimento em agência da CAIXA.",
        "fontes": [
          "pm-mec-2026"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Manter o CPF regular e o Cadastro Único atualizado dentro do prazo de verificação do MEC. Não é preciso fazer inscrição no programa.",
        "canal_url": "https://www.gov.br/mec/pt-br/assuntos/noticias/2026/abril/pe-de-meia-confira-tutorial-para-pais-autorizarem-uso-da-conta",
        "fontes": [
          "pm-mec-2026",
          "pm-mec-2025"
        ]
      },
      {
        "ordem": 2,
        "acao": "Conferir se o estudante foi enquadrado como público do programa e ver o extrato de pagamentos no aplicativo Jornada do Estudante.",
        "canal_url": "https://www.gov.br/mec/pt-br/assuntos/noticias/2025/abril/pe-de-meia-2025-conheca-os-criterios-para-a-participacao",
        "fontes": [
          "pm-mec-2025"
        ]
      },
      {
        "ordem": 3,
        "acao": "A CAIXA abre a conta digital automaticamente; não é preciso ir à agência.",
        "canal_url": "https://www.gov.br/mec/pt-br/assuntos/noticias/2026/abril/pe-de-meia-confira-tutorial-para-pais-autorizarem-uso-da-conta",
        "fontes": [
          "pm-mec-2026"
        ]
      },
      {
        "ordem": 4,
        "acao": "Acessar o aplicativo Caixa Tem. Maiores de 18 anos entram com o CPF e cadastram uma senha; para menores, o responsável legal precisa liberar a conta antes.",
        "canal_url": "https://www.gov.br/mec/pt-br/assuntos/noticias/2026/abril/pe-de-meia-confira-tutorial-para-pais-autorizarem-uso-da-conta",
        "fontes": [
          "pm-mec-2026"
        ]
      },
      {
        "ordem": 5,
        "acao": "Manter frequência mínima de 80% para receber as parcelas.",
        "canal_url": "https://www.gov.br/mec/pt-br/assuntos/noticias/2026/abril/pe-de-meia-confira-tutorial-para-pais-autorizarem-uso-da-conta",
        "fontes": [
          "pm-mec-2026"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "aplicativo_oficial",
        "nome": "Aplicativo Caixa Tem (CAIXA)",
        "url": null
      },
      {
        "tipo": "aplicativo_oficial",
        "nome": "Aplicativo Jornada do Estudante (MEC)",
        "url": null
      },
      {
        "tipo": "portal_oficial",
        "nome": "Pé-de-Meia — notícias e perguntas frequentes do MEC",
        "url": "https://www.gov.br/mec/pt-br/assuntos/noticias/2026/abril/pe-de-meia-confira-tutorial-para-pais-autorizarem-uso-da-conta"
      }
    ],
    "custo": {
      "status": "pendente",
      "valor_brl": null,
      "descricao": "As páginas lidas não mencionam taxa; o programa paga incentivos ao estudante.",
      "fontes": [
        "pm-mec-2026"
      ]
    },
    "prazo": {
      "status": "pendente",
      "descricao": "Pagamentos mensais conforme o calendário do MEC; não há prazo de atendimento por pedido.",
      "fontes": [
        "pm-mec-2026"
      ]
    },
    "observacoes": [
      "Ensino regular: incentivo de R$ 200 por mês com matrícula e frequência, que pode ser sacado a qualquer momento.",
      "EJA: R$ 200 ao comprovar matrícula, mais incentivos de R$ 225 por frequência, disponíveis para saque.",
      "R$ 1.000 ao fim de cada ano concluído com aprovação, que só pode ser sacado após a formatura no ensino médio; adicional de R$ 200 pela participação no Enem. O total pode chegar a R$ 9,2 mil por aluno.",
      "Programa instituído pela Lei nº 14.818/2024."
    ],
    "fontes": [
      {
        "id": "pm-mec-2026",
        "url": "https://www.gov.br/mec/pt-br/assuntos/noticias/2026/abril/pe-de-meia-confira-tutorial-para-pais-autorizarem-uso-da-conta",
        "titulo": "Pé-de-Meia: confira tutorial para pais autorizarem uso da conta",
        "orgao": "MEC",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "descricao",
          "condicoes_acesso",
          "passo_a_passo",
          "observacoes"
        ],
        "limitacoes": [
          "Notícia do MEC; a seção de perguntas frequentes do programa tem conteúdo recolhido que não foi lido."
        ]
      },
      {
        "id": "pm-mec-2025",
        "url": "https://www.gov.br/mec/pt-br/assuntos/noticias/2025/abril/pe-de-meia-2025-conheca-os-criterios-para-a-participacao",
        "titulo": "Pé-de-Meia 2025: conheça os critérios para a participação",
        "orgao": "MEC",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "passo_a_passo",
          "observacoes"
        ],
        "limitacoes": [
          "Texto escrito para o ano de 2025; usado apenas para o aplicativo Jornada do Estudante e para as regras de valores, repetidas na notícia de 2026."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Calendário de pagamentos e regras específicas por série não foram lidos.",
      "Custo e prazo não informados nas páginas lidas.",
      "Regras mudam a cada ano; confirmar no MEC e na CAIXA."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "df-cin",
    "servico_base": "cin-primeira",
    "nome": "Solicitar a primeira CIN",
    "nomes_populares": [
      "RG",
      "Identidade nacional",
      "nova identidade"
    ],
    "categoria": "identificacao_civil",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "DF",
      "municipio": null
    },
    "orgao_responsavel": "Instituto de Identificação / PCDF",
    "descricao": "Emitir a identidade nacional no DF.",
    "publico": "Brasileiros e portugueses com igualdade reconhecida.",
    "condicoes_acesso": [
      "Primeira CIN: nunca emitida no DF ou outra UF."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "Certidão do estado civil",
        "observacao": "Original ou cópia autenticada; nascimento ou casamento com averbações.",
        "fontes": [
          "df-cin-nahora"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "CPF",
        "quando": "Se já inscrito",
        "observacao": "Informar número; sem CPF, procurar posto presencial.",
        "fontes": [
          "df-cin-nahora"
        ]
      },
      {
        "documento": "Documento do responsável e vínculo legal",
        "quando": "Menor de 16 anos",
        "observacao": "Acompanhamento do genitor ou responsável; exceções na carta.",
        "fontes": [
          "df-cin-nahora"
        ]
      },
      {
        "documento": "Naturalização ou igualdade de direitos",
        "quando": "Naturalizado ou português equiparado",
        "observacao": "Apresentar documento próprio da condição.",
        "fontes": [
          "df-cin-nahora"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Agendar ou consultar modalidade do posto.",
        "canal_url": "https://www.nahora.df.gov.br/policia_civil",
        "fontes": [
          "df-cin-nahora"
        ]
      },
      {
        "ordem": 2,
        "acao": "Comparecer com documentos; retirar com protocolo no mesmo posto.",
        "canal_url": "https://www.nahora.df.gov.br/policia_civil",
        "fontes": [
          "df-cin-nahora"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Canal oficial do serviço",
        "url": "https://www.nahora.df.gov.br/policia_civil"
      }
    ],
    "custo": {
      "status": "gratuito",
      "valor_brl": 0,
      "descricao": "Primeira emissão em papel gratuita; cartão opcional custa R$ 84,00.",
      "fontes": [
        "df-cin-nahora"
      ]
    },
    "prazo": {
      "status": "confirmado",
      "descricao": "20 dias corridos; inconsistências no CPF podem ampliar o prazo.",
      "fontes": [
        "df-cin-nahora"
      ]
    },
    "observacoes": [],
    "fontes": [
      {
        "id": "df-cin-nahora",
        "url": "https://www.nahora.df.gov.br/policia_civil",
        "titulo": "Na Hora — Instituto de Identificação / primeira CIN",
        "orgao": "PCDF / Na Hora",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "documentos",
          "público",
          "agendamento",
          "custo",
          "prazo",
          "retirada"
        ],
        "limitacoes": []
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "confirmado",
    "pendencias": [],
    "apto_catalogo": "sim"
  },
  {
    "id": "df-cnh",
    "servico_base": "cnh-segunda-via",
    "nome": "Solicitar segunda via da CNH",
    "nomes_populares": [
      "Segunda via da carteira de motorista",
      "carteira de motorista"
    ],
    "categoria": "habilitacao",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "DF",
      "municipio": null
    },
    "orgao_responsavel": "Detran-DF",
    "descricao": "Reemitir a habilitação válida.",
    "publico": "Titular da CNH.",
    "condicoes_acesso": [
      "CNH não vencida; correções são tratadas nas unidades do Detran."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "Identificação e cópia",
        "observacao": "Exigidas no atendimento presencial.",
        "fontes": [
          "df-cnh-nahora"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Solicitar pelo portal ou presencialmente.",
        "canal_url": "https://portal.detran.df.gov.br/",
        "fontes": [
          "df-cnh-nahora"
        ]
      },
      {
        "ordem": 2,
        "acao": "Pagar a guia e acompanhar a entrega.",
        "canal_url": "https://agenciabrasilia.df.gov.br/web/nahora/detran-3",
        "fontes": [
          "df-cnh-nahora"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Canal oficial do serviço",
        "url": "https://portal.detran.df.gov.br/"
      },
      {
        "tipo": "web",
        "nome": "Canal oficial do serviço",
        "url": "https://agenciabrasilia.df.gov.br/web/nahora/detran-3"
      }
    ],
    "custo": {
      "status": "pago",
      "valor_brl": null,
      "descricao": "Há taxa; consultar tabela e guia vigente.",
      "fontes": [
        "df-cnh-nahora"
      ]
    },
    "prazo": {
      "status": "confirmado",
      "descricao": "10 dias após confirmação do pagamento, conforme seção 9 da carta Na Hora.",
      "fontes": [
        "df-cnh-nahora"
      ]
    },
    "observacoes": [
      "Carta antiga de 2018 indicava 20 dias; priorizado texto Na Hora atualizado em 2026."
    ],
    "fontes": [
      {
        "id": "df-cnh-nahora",
        "url": "https://agenciabrasilia.df.gov.br/web/nahora/detran-3",
        "titulo": "Na Hora — Detran-DF, itens 7 e 9",
        "orgao": "Detran-DF / Na Hora",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "segunda via",
          "biometria",
          "documentos",
          "canais",
          "prazo"
        ],
        "limitacoes": [
          "Tabela de valores não incorporada."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Confirmar valor vigente."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "df-cnh-renovacao",
    "servico_base": "cnh-renovacao",
    "nome": "Renovar a CNH",
    "nomes_populares": [
      "Renovar habilitação",
      "Renovar carteira de motorista",
      "carteira de motorista"
    ],
    "categoria": "habilitacao",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "DF",
      "municipio": null
    },
    "orgao_responsavel": "Detran-DF",
    "descricao": "Renovar exames e habilitação pelo procedimento estadual.",
    "publico": "Condutor com CNH vencida ou a vencer.",
    "condicoes_acesso": [
      "Biometria anterior aos exames; FAQ dispensa nova coleta quando realizada há menos de dez anos."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "Identificação, CPF e CNH",
        "observacao": "Carta de 2018 pede originais e cópias; reconfirmar exigência atual.",
        "fontes": [
          "df-carta-2018"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "Comprovante de endereço no DF",
        "quando": "CNH de outra UF ou coleta biométrica",
        "observacao": "Transferência: procurar unidade do Detran.",
        "fontes": [
          "df-detran-faq",
          "df-cnh-nahora"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Conferir necessidade de biometria e comparecer ao posto.",
        "canal_url": "https://agenciabrasilia.df.gov.br/pt/web/departamento-de-tr%C3%A2nsito/perguntas-frequentes-detran",
        "fontes": [
          "df-detran-faq"
        ]
      },
      {
        "ordem": 2,
        "acao": "Realizar exames na clínica credenciada e quitar cobranças.",
        "canal_url": "https://agenciabrasilia.df.gov.br/pt/web/departamento-de-tr%C3%A2nsito/perguntas-frequentes-detran",
        "fontes": [
          "df-detran-faq",
          "df-carta-2018"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Canal oficial do serviço",
        "url": "https://agenciabrasilia.df.gov.br/pt/web/departamento-de-tr%C3%A2nsito/perguntas-frequentes-detran"
      }
    ],
    "custo": {
      "status": "pago",
      "valor_brl": null,
      "descricao": "Cobrança e exames conforme caso; valor vigente não consolidado.",
      "fontes": [
        "df-carta-2018"
      ]
    },
    "prazo": {
      "status": "pendente",
      "descricao": "Prazo vigente não confirmado; documento de 2018 não usado como garantia.",
      "fontes": [
        "df-carta-2018"
      ]
    },
    "observacoes": [
      "Ficha cobre renovação estadual convencional; eventual renovação automática deve ser verificada no canal oficial."
    ],
    "fontes": [
      {
        "id": "df-cnh-nahora",
        "url": "https://agenciabrasilia.df.gov.br/web/nahora/detran-3",
        "titulo": "Na Hora — Detran-DF, itens 7 e 9",
        "orgao": "Detran-DF / Na Hora",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "segunda via",
          "biometria",
          "documentos",
          "canais",
          "prazo"
        ],
        "limitacoes": [
          "Tabela de valores não incorporada."
        ]
      },
      {
        "id": "df-detran-faq",
        "url": "https://agenciabrasilia.df.gov.br/pt/web/departamento-de-tr%C3%A2nsito/perguntas-frequentes-detran",
        "titulo": "Perguntas frequentes — Habilitação",
        "orgao": "Detran-DF",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "renovação",
          "biometria",
          "outra UF",
          "clínica"
        ],
        "limitacoes": []
      },
      {
        "id": "df-carta-2018",
        "url": "https://www.detran.df.gov.br/wp-content/uploads/2018/06/Vers%C3%A3o-resumida-HABILITA%C3%87%C3%83O-30.05.2018.pdf",
        "titulo": "Carta resumida de habilitação — 2018, seção 6",
        "orgao": "Detran-DF",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "documento_lido",
        "sustenta": [
          "documentação de renovação",
          "exames",
          "cobrança"
        ],
        "limitacoes": [
          "Documento antigo; requisitos, cópias e prazo precisam ser reconfirmados. Não utilizado como prazo vigente."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Revalidar checklist atual, cópias, exames condicionais e taxas.",
      "Confirmar prazo e modalidade de entrega."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "go-cin",
    "servico_base": "cin-primeira",
    "nome": "Solicitar a primeira CIN",
    "nomes_populares": [
      "RG",
      "Identidade nacional",
      "nova identidade"
    ],
    "categoria": "identificacao_civil",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "GO",
      "municipio": null
    },
    "orgao_responsavel": "Polícia Civil de Goiás / SSP-GO",
    "descricao": "Emitir a identidade nacional em Goiás.",
    "publico": "Pessoa que solicita a primeira CIN.",
    "condicoes_acesso": [
      "Informar CPF se existente e e-mail válido."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "Certidão de nascimento ou casamento",
        "observacao": "Original, cópia autenticada ou formato eletrônico aceito; conferir averbações.",
        "fontes": [
          "go-cin-vapt"
        ]
      },
      {
        "documento": "Endereço com CEP e e-mail",
        "observacao": "Comprovante atualizado é preferencial; autodeclaração é aceita.",
        "fontes": [
          "go-cin-vapt"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "CPF",
        "quando": "Se já possui",
        "observacao": "Se não possui, inscrição ocorre no atendimento.",
        "fontes": [
          "go-cin-vapt"
        ]
      },
      {
        "documento": "Documentos do acompanhante e vínculo",
        "quando": "Menor de 16 anos",
        "observacao": "Genitor ou responsável legal; representação possui requisitos específicos.",
        "fontes": [
          "go-cin-vapt"
        ]
      },
      {
        "documento": "Naturalização ou igualdade",
        "quando": "Caso aplicável",
        "observacao": "Certificado ou portaria.",
        "fontes": [
          "go-cin-vapt"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Consultar agendamento e comparecer com documentos.",
        "canal_url": "https://www.go.gov.br/servicos/servico/solicitar-carteira-de-identidade-nacional--cin",
        "fontes": [
          "go-cin-vapt"
        ]
      },
      {
        "ordem": 2,
        "acao": "Retirar na unidade com protocolo original.",
        "canal_url": "https://vaptvupt.go.gov.br/servico/solicitar-carteira-de-identidade-nacional--cin-ssp--secretaria-de-estado-da-seguranca-publica-6a610024b4e2b?removeLayout=1",
        "fontes": [
          "go-cin-vapt"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Canal oficial do serviço",
        "url": "https://www.go.gov.br/servicos/servico/solicitar-carteira-de-identidade-nacional--cin"
      },
      {
        "tipo": "web",
        "nome": "Canal oficial do serviço",
        "url": "https://vaptvupt.go.gov.br/servico/solicitar-carteira-de-identidade-nacional--cin-ssp--secretaria-de-estado-da-seguranca-publica-6a610024b4e2b?removeLayout=1"
      }
    ],
    "custo": {
      "status": "gratuito",
      "valor_brl": 0,
      "descricao": "Primeira via gratuita.",
      "fontes": [
        "go-cin-vapt"
      ]
    },
    "prazo": {
      "status": "confirmado",
      "descricao": "Até 20 dias úteis na capital e interior.",
      "fontes": [
        "go-cin-vapt"
      ]
    },
    "observacoes": [],
    "fontes": [
      {
        "id": "go-cin-vapt",
        "url": "https://vaptvupt.go.gov.br/servico/solicitar-carteira-de-identidade-nacional--cin-ssp--secretaria-de-estado-da-seguranca-publica-6a610024b4e2b?removeLayout=1",
        "titulo": "Solicitar Carteira de Identidade Nacional — CIN",
        "orgao": "SSP-GO / Vapt Vupt",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "documentos",
          "CPF",
          "menores",
          "gratuidade",
          "prazo",
          "retirada"
        ],
        "limitacoes": []
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "confirmado",
    "pendencias": [],
    "apto_catalogo": "sim"
  },
  {
    "id": "go-cnh",
    "servico_base": "cnh-segunda-via",
    "nome": "Solicitar segunda via da CNH",
    "nomes_populares": [
      "Segunda via da carteira de motorista",
      "carteira de motorista"
    ],
    "categoria": "habilitacao",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "GO",
      "municipio": null
    },
    "orgao_responsavel": "Detran-GO",
    "descricao": "Reemitir a habilitação sem alterar dados pessoais ou foto.",
    "publico": "Condutor ou procurador.",
    "condicoes_acesso": [
      "Aplicativo pode impedir pedido com bloqueio ou dados desatualizados."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "Identificação com foto e CPF",
        "observacao": "Originais; Vapt Vupt dispensa cópias no atendimento do titular.",
        "fontes": [
          "go-cnh-vapt"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "Procuração e documentos do titular e representante",
        "quando": "Representação",
        "observacao": "Cópias conforme carta Vapt Vupt.",
        "fontes": [
          "go-cnh-vapt"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "No Expresso, entrar com gov.br, escolher unidade e gerar taxa.",
        "canal_url": "https://www.go.gov.br/servicos/servico/solicitar-segunda-via-da-carteira-nacional-de-habilitacao-cnh",
        "fontes": [
          "go-cnh-expresso"
        ]
      },
      {
        "ordem": 2,
        "acao": "Pagar, acompanhar e retirar na unidade escolhida.",
        "canal_url": "https://www.go.gov.br/servicos/servico/solicitar-segunda-via-da-carteira-nacional-de-habilitacao-cnh",
        "fontes": [
          "go-cnh-expresso"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Canal oficial do serviço",
        "url": "https://www.go.gov.br/servicos/servico/solicitar-segunda-via-da-carteira-nacional-de-habilitacao-cnh"
      }
    ],
    "custo": {
      "status": "pago",
      "valor_brl": 208.05,
      "descricao": "Taxa 2026; confirmar guia antes de pagar.",
      "fontes": [
        "go-detran-vapt",
        "go-cnh-expresso"
      ]
    },
    "prazo": {
      "status": "confirmado",
      "descricao": "Até dez dias úteis no Expresso indexado.",
      "fontes": [
        "go-cnh-expresso"
      ]
    },
    "observacoes": [],
    "fontes": [
      {
        "id": "go-cnh-vapt",
        "url": "https://vaptvupt.go.gov.br/servico/2-via-da-cnh-detran--departamento-estadual-de-transito-6a88577bbb334",
        "titulo": "2ª via da CNH",
        "orgao": "Detran-GO / Vapt Vupt",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "documentos",
          "procuração",
          "canais",
          "restrições"
        ],
        "limitacoes": [
          "Diverge do Expresso sobre CNH de outra UF."
        ]
      },
      {
        "id": "go-cnh-expresso",
        "url": "https://www.go.gov.br/servicos/servico/solicitar-segunda-via-da-carteira-nacional-de-habilitacao-cnh",
        "titulo": "Solicitar segunda via da CNH",
        "orgao": "Detran-GO / Expresso",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "trecho_indexado",
        "sustenta": [
          "fluxo digital",
          "valor",
          "prazo",
          "transferência"
        ],
        "limitacoes": [
          "Página aberta, mas sem texto no extrator; conteúdo recuperado em busca oficial indexada."
        ]
      },
      {
        "id": "go-detran-vapt",
        "url": "https://vaptvupt.go.gov.br/orgao/detran--departamento-estadual-de-transito",
        "titulo": "Detran — requisitos gerais e taxas 2026",
        "orgao": "Detran-GO / Vapt Vupt",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "taxas 2026",
          "comprovação de endereço"
        ],
        "limitacoes": []
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Resolver divergência para CNH de outra UF: Vapt Vupt orienta UF de origem; Expresso orienta transferência concomitante.",
      "Prazo recuperado apenas em conteúdo indexado."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "go-cnh-renovacao",
    "servico_base": "cnh-renovacao",
    "nome": "Renovar a CNH",
    "nomes_populares": [
      "Renovar habilitação",
      "Renovar carteira de motorista",
      "carteira de motorista"
    ],
    "categoria": "habilitacao",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "GO",
      "municipio": null
    },
    "orgao_responsavel": "Detran-GO",
    "descricao": "Renovar a habilitação e exames pelo procedimento estadual.",
    "publico": "Condutor habilitado.",
    "condicoes_acesso": [
      "Solicitação pessoal; exames dependem de categoria e atividade."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "CNH ou identificação equivalente",
        "observacao": "Carta antiga admite identificação conforme vencimento; confirmar checklist.",
        "fontes": [
          "go-carta-2023"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "CPF",
        "quando": "Não consta na identificação",
        "observacao": "Comprovante de inscrição.",
        "fontes": [
          "go-carta-2023"
        ]
      },
      {
        "documento": "Comprovação de endereço",
        "quando": "Conforme atendimento",
        "observacao": "Vapt Vupt atual admite declaração verbal do próprio endereço para pessoa física.",
        "fontes": [
          "go-detran-vapt"
        ]
      },
      {
        "documento": "Exame toxicológico",
        "quando": "Categorias C, D ou E",
        "observacao": "Conforme instrução da carta; exame psicológico se atividade remunerada.",
        "fontes": [
          "go-carta-2023"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Consultar renovação no Expresso ou unidade oficial.",
        "canal_url": "https://www.go.gov.br/servicos/servico/obter-a-renovacao-da-cnh",
        "fontes": [
          "go-carta-2023"
        ]
      },
      {
        "ordem": 2,
        "acao": "Apresentar documentos, fazer biometria, pagar e realizar exames indicados.",
        "canal_url": "https://servicos.detran.go.gov.br/sgcp/rest/docflow/anexo/494734039/pdf",
        "fontes": [
          "go-carta-2023"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Canal oficial do serviço",
        "url": "https://www.go.gov.br/servicos/servico/obter-a-renovacao-da-cnh"
      },
      {
        "tipo": "web",
        "nome": "Canal oficial do serviço",
        "url": "https://servicos.detran.go.gov.br/sgcp/rest/docflow/anexo/494734039/pdf"
      }
    ],
    "custo": {
      "status": "variavel",
      "valor_brl": null,
      "descricao": "Tabela 2026: A/B, sem EAR, caso comum, físico+digital R$ 286,96; somente digital R$ 259,06. EAR, categorias C/D/E e casos especiais alteram total.",
      "fontes": [
        "go-detran-vapt"
      ]
    },
    "prazo": {
      "status": "pendente",
      "descricao": "Prazo de renovação não confirmado.",
      "fontes": [
        "go-carta-2023"
      ]
    },
    "observacoes": [
      "Não usar prazo da segunda via para renovação."
    ],
    "fontes": [
      {
        "id": "go-detran-vapt",
        "url": "https://vaptvupt.go.gov.br/orgao/detran--departamento-estadual-de-transito",
        "titulo": "Detran — requisitos gerais e taxas 2026",
        "orgao": "Detran-GO / Vapt Vupt",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "taxas 2026",
          "comprovação de endereço"
        ],
        "limitacoes": []
      },
      {
        "id": "go-carta-2023",
        "url": "https://servicos.detran.go.gov.br/sgcp/rest/docflow/anexo/494734039/pdf",
        "titulo": "Carta de serviços, seção 2.52 — renovação",
        "orgao": "Detran-GO",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "documento_lido",
        "sustenta": [
          "documentos de renovação",
          "etapas",
          "exames"
        ],
        "limitacoes": [
          "Carta antiga; validar exigências atuais e prazo."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Checklist de renovação deriva de carta antiga; confirmar exigências atuais.",
      "Confirmar prazo."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "mt-cin",
    "servico_base": "cin-primeira",
    "nome": "Solicitar a primeira CIN",
    "nomes_populares": [
      "RG",
      "Identidade nacional",
      "nova identidade"
    ],
    "categoria": "identificacao_civil",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "MT",
      "municipio": null
    },
    "orgao_responsavel": "Politec-MT",
    "descricao": "Emitir a identidade nacional em Mato Grosso.",
    "publico": "Pessoa que solicita a primeira CIN.",
    "condicoes_acesso": [
      "CPF e certidão devem ter dados compatíveis."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "CPF",
        "observacao": "Informar número e conferir situação cadastral.",
        "fontes": [
          "mt-cin-portal"
        ]
      },
      {
        "documento": "Certidão de nascimento ou casamento",
        "observacao": "Original ou cópia autenticada.",
        "fontes": [
          "mt-cin-portal"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "Identificação do responsável",
        "quando": "Menor de 16 anos",
        "observacao": "Responsável retira o documento; checklist de acompanhamento deve ser conferido.",
        "fontes": [
          "mt-cin-portal"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Agendar no Ganha Tempo ou consultar posto de identificação.",
        "canal_url": "https://www.politec.mt.gov.br/identifica%C3%A7%C3%A3o-t%C3%A9cnica",
        "fontes": [
          "mt-cin-politec"
        ]
      },
      {
        "ordem": 2,
        "acao": "Apresentar documentos, coletar dados e guardar protocolo.",
        "canal_url": "https://portal.mt.gov.br/catalog/emitir-1a-via-da-carteira-de-identidade-nacional-%28cin%29",
        "fontes": [
          "mt-cin-portal"
        ]
      },
      {
        "ordem": 3,
        "acao": "Consultar pedido e retirar no mesmo local com protocolo.",
        "canal_url": "https://portal.mt.gov.br/catalog/emitir-1a-via-da-carteira-de-identidade-nacional-%28cin%29",
        "fontes": [
          "mt-cin-portal",
          "mt-cin-politec"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Canal oficial do serviço",
        "url": "https://www.politec.mt.gov.br/identifica%C3%A7%C3%A3o-t%C3%A9cnica"
      },
      {
        "tipo": "web",
        "nome": "Canal oficial do serviço",
        "url": "https://portal.mt.gov.br/catalog/emitir-1a-via-da-carteira-de-identidade-nacional-%28cin%29"
      }
    ],
    "custo": {
      "status": "gratuito",
      "valor_brl": 0,
      "descricao": "Primeira via em papel gratuita; cartão opcional R$ 99,53 na página.",
      "fontes": [
        "mt-cin-politec"
      ]
    },
    "prazo": {
      "status": "pendente",
      "descricao": "Prazo não localizado nas páginas consultadas.",
      "fontes": [
        "mt-cin-portal",
        "mt-cin-politec"
      ]
    },
    "observacoes": [],
    "fontes": [
      {
        "id": "mt-cin-portal",
        "url": "https://portal.mt.gov.br/catalog/emitir-1a-via-da-carteira-de-identidade-nacional-%28cin%29",
        "titulo": "Emitir 1ª via da CIN",
        "orgao": "Politec-MT / Portal MT",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "trecho_indexado",
        "sustenta": [
          "documentos",
          "etapas",
          "CPF",
          "custo"
        ],
        "limitacoes": [
          "Abertura direta não expõe texto; conteúdo consultado no índice oficial."
        ]
      },
      {
        "id": "mt-cin-politec",
        "url": "https://www.politec.mt.gov.br/identifica%C3%A7%C3%A3o-t%C3%A9cnica",
        "titulo": "Identificação Técnica — perguntas frequentes",
        "orgao": "Politec-MT",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "gratuidade",
          "cartão",
          "agendamento",
          "retirada"
        ],
        "limitacoes": []
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Confirmar prazo e checklist especial de menores/naturalizados.",
      "Parte dos documentos e etapas depende de conteúdo indexado."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "mt-cnh",
    "servico_base": "cnh-segunda-via",
    "nome": "Solicitar segunda via da CNH",
    "nomes_populares": [
      "Segunda via da carteira de motorista",
      "carteira de motorista"
    ],
    "categoria": "habilitacao",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "MT",
      "municipio": null
    },
    "orgao_responsavel": "Detran-MT",
    "descricao": "Reemitir CNH por extravio, furto ou dano.",
    "publico": "Titular de CNH emitida pelo Detran-MT.",
    "condicoes_acesso": [
      "CNH válida; sem alteração de dados."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "Documento oficial com foto",
        "observacao": "Em bom estado.",
        "fontes": [
          "mt-cnh-carta"
        ]
      },
      {
        "documento": "CPF",
        "observacao": "Informar no atendimento.",
        "fontes": [
          "mt-cnh-carta"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Entrar no MT Cidadão ou portal e escolher segunda via.",
        "canal_url": "https://portal-servicos.detran.mt.gov.br/",
        "fontes": [
          "mt-cnh-carta"
        ]
      },
      {
        "ordem": 2,
        "acao": "Conferir contato, endereço e unidade; pagar e cumprir etapas.",
        "canal_url": "https://www.detran.mt.gov.br/web/DETRAN/servicos?c=9895454&e=10062270",
        "fontes": [
          "mt-cnh-carta"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Canal oficial do serviço",
        "url": "https://portal-servicos.detran.mt.gov.br/"
      },
      {
        "tipo": "web",
        "nome": "Canal oficial do serviço",
        "url": "https://www.detran.mt.gov.br/web/DETRAN/servicos?c=9895454&e=10062270"
      }
    ],
    "custo": {
      "status": "variavel",
      "valor_brl": null,
      "descricao": "Requerimento R$ 103,30; emissão R$ 54,41; imagem, se necessária, R$ 32,05. Confirmar guia.",
      "fontes": [
        "mt-cnh-carta"
      ]
    },
    "prazo": {
      "status": "confirmado",
      "descricao": "Após conclusão: cinco dias úteis na sede; quinze em Ciretrans/núcleos.",
      "fontes": [
        "mt-cnh-carta"
      ]
    },
    "observacoes": [],
    "fontes": [
      {
        "id": "mt-cnh-carta",
        "url": "https://www.detran.mt.gov.br/web/DETRAN/servicos?c=9895454&e=10062270",
        "titulo": "Segunda via da CNH",
        "orgao": "Detran-MT",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "documentos",
          "etapas",
          "taxas",
          "prazo",
          "restrições"
        ],
        "limitacoes": []
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "confirmado",
    "pendencias": [],
    "apto_catalogo": "sim"
  },
  {
    "id": "mt-cnh-renovacao",
    "servico_base": "cnh-renovacao",
    "nome": "Renovar a CNH",
    "nomes_populares": [
      "Renovar habilitação",
      "Renovar carteira de motorista",
      "carteira de motorista"
    ],
    "categoria": "habilitacao",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "MT",
      "municipio": null
    },
    "orgao_responsavel": "Detran-MT",
    "descricao": "Renovar exames de saúde e habilitação.",
    "publico": "Condutor com CNH vencida ou próxima do vencimento.",
    "condicoes_acesso": [
      "Informar atividade remunerada e condição PcD; seguir exames definidos."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "Documento oficial com foto e CPF",
        "observacao": "Identificação em bom estado.",
        "fontes": [
          "mt-renovacao-carta"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "Exame toxicológico",
        "quando": "Categorias C/D/E",
        "observacao": "Antes do exame de saúde; avaliação psicológica para EAR, junta médica conforme restrição.",
        "fontes": [
          "mt-renovacao-carta"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Abrir renovação no MT Cidadão/portal e atualizar cadastro.",
        "canal_url": "https://portal-servicos.detran.mt.gov.br/",
        "fontes": [
          "mt-renovacao-carta"
        ]
      },
      {
        "ordem": 2,
        "acao": "Pagar taxas e realizar coleta/exames indicados.",
        "canal_url": "https://www.detran.mt.gov.br/servicos?c=9895454&e=10062261",
        "fontes": [
          "mt-renovacao-carta"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Canal oficial do serviço",
        "url": "https://portal-servicos.detran.mt.gov.br/"
      },
      {
        "tipo": "web",
        "nome": "Canal oficial do serviço",
        "url": "https://www.detran.mt.gov.br/servicos?c=9895454&e=10062261"
      }
    ],
    "custo": {
      "status": "variavel",
      "valor_brl": null,
      "descricao": "Renovação R$ 189,76; saúde R$ 78,39; psicotécnico EAR R$ 171,98; outra UF R$ 108,82; junta médica R$ 235,17. Toxicológico à parte.",
      "fontes": [
        "mt-renovacao-carta"
      ]
    },
    "prazo": {
      "status": "confirmado",
      "descricao": "Após conclusão: cinco dias úteis na sede; quinze em Ciretrans/núcleos.",
      "fontes": [
        "mt-renovacao-carta"
      ]
    },
    "observacoes": [
      "Valores publicados na carta; conferir cobrança emitida. Renovação automática não foi testada."
    ],
    "fontes": [
      {
        "id": "mt-renovacao-carta",
        "url": "https://www.detran.mt.gov.br/servicos?c=9895454&e=10062261",
        "titulo": "Renovação de CNH",
        "orgao": "Detran-MT",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "documentos",
          "etapas",
          "exames",
          "taxas",
          "prazo"
        ],
        "limitacoes": []
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "confirmado",
    "pendencias": [],
    "apto_catalogo": "sim"
  },
  {
    "id": "ms-cin",
    "servico_base": "cin-primeira",
    "nome": "Solicitar a primeira CIN",
    "nomes_populares": [
      "RG",
      "Identidade nacional",
      "nova identidade"
    ],
    "categoria": "identificacao_civil",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "MS",
      "municipio": null
    },
    "orgao_responsavel": "Instituto de Identificação / Polícia Científica-MS / Sejusp",
    "descricao": "Emitir a identidade nacional em Mato Grosso do Sul.",
    "publico": "Pessoa que solicita a primeira CIN.",
    "condicoes_acesso": [
      "Escolher posto e horário disponíveis no agendamento oficial."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "CPF",
        "observacao": "Número de identificação.",
        "fontes": [
          "ms-cin-documentos"
        ]
      },
      {
        "documento": "Certidão original de nascimento ou casamento",
        "observacao": "Conforme estado civil.",
        "fontes": [
          "ms-cin-documentos"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "Averbação na certidão de casamento",
        "quando": "Divórcio ou viuvez",
        "observacao": "Apresentar certidão com anotação correspondente.",
        "fontes": [
          "ms-cin-documentos"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Escolher primeira ou segunda emissão de RG, posto, dia e horário.",
        "canal_url": "https://servicos.sejusp.ms.gov.br/",
        "fontes": [
          "ms-cin-agendamento"
        ]
      },
      {
        "ordem": 2,
        "acao": "Confirmar agendamento e comparecer com documentos.",
        "canal_url": "https://www.cgp.sejusp.ms.gov.br/policia-cientifica-tem-vagas-disponiveis-para-emissao-do-novo-rg-em-tres-lagoas/",
        "fontes": [
          "ms-cin-documentos",
          "ms-cin-agendamento"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Canal oficial do serviço",
        "url": "https://servicos.sejusp.ms.gov.br/"
      },
      {
        "tipo": "web",
        "nome": "Canal oficial do serviço",
        "url": "https://www.cgp.sejusp.ms.gov.br/policia-cientifica-tem-vagas-disponiveis-para-emissao-do-novo-rg-em-tres-lagoas/"
      }
    ],
    "custo": {
      "status": "gratuito",
      "valor_brl": 0,
      "descricao": "Primeira CIN gratuita.",
      "fontes": [
        "ms-cin-agendamento"
      ]
    },
    "prazo": {
      "status": "pendente",
      "descricao": "Prazo de entrega não confirmado.",
      "fontes": [
        "ms-cin-documentos",
        "ms-cin-agendamento"
      ]
    },
    "observacoes": [
      "Notícias de vagas não demonstram disponibilidade atual."
    ],
    "fontes": [
      {
        "id": "ms-cin-documentos",
        "url": "https://www.cgp.sejusp.ms.gov.br/policia-cientifica-tem-vagas-disponiveis-para-emissao-do-novo-rg-em-tres-lagoas/",
        "titulo": "CIN — documentação e atendimento (28/10/2026)",
        "orgao": "Polícia Científica-MS",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "documentos",
          "averbações",
          "atendimento urgente"
        ],
        "limitacoes": [
          "Notícia centrada em Três Lagoas; disponibilidade não generalizada."
        ]
      },
      {
        "id": "ms-cin-agendamento",
        "url": "https://www.cgp.sejusp.ms.gov.br/novo-rg-agenda-e-aberta-com-mais-de-28-mil-vagas-por-dia-em-ms/",
        "titulo": "CIN — como realizar agendamento (30/01/2026)",
        "orgao": "Polícia Científica-MS",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "agendamento estadual",
          "gratuidade"
        ],
        "limitacoes": [
          "Vagas e números da notícia são históricos."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Confirmar prazo e documentos especiais para menores, representantes e naturalizados."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "ms-cnh",
    "servico_base": "cnh-segunda-via",
    "nome": "Solicitar segunda via da CNH",
    "nomes_populares": [
      "Segunda via da carteira de motorista",
      "carteira de motorista"
    ],
    "categoria": "habilitacao",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "MS",
      "municipio": null
    },
    "orgao_responsavel": "Detran-MS",
    "descricao": "Solicitar reemissão da CNH ou PPD.",
    "publico": "Condutor habilitado.",
    "condicoes_acesso": [
      "Conferir endereço antes da emissão impressa."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "CNH original ou identificação",
        "observacao": "Orientação de manual antigo; checklist atual pendente.",
        "fontes": [
          "ms-guia-2017"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "Boletim de ocorrência ou CNH danificada",
        "quando": "Extravio ou dano",
        "observacao": "Consta de checklist antigo; confirmar aplicabilidade atual.",
        "fontes": [
          "ms-guia-2017"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Abrir Meu Detran, Habilitação, segunda via.",
        "canal_url": "https://www2.meudetran.ms.gov.br/habilitacao.php",
        "fontes": [
          "ms-cnh-impressa"
        ]
      },
      {
        "ordem": 2,
        "acao": "Conferir endereço, emitir e pagar guia.",
        "canal_url": "https://www.detran.ms.gov.br/detran-ms-orienta-sobre-renovacao-automatica-da-cnh-para-bom-condutor-e-como-solicitar-a-versao-impressa/",
        "fontes": [
          "ms-cnh-impressa"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Canal oficial do serviço",
        "url": "https://www2.meudetran.ms.gov.br/habilitacao.php"
      },
      {
        "tipo": "web",
        "nome": "Canal oficial do serviço",
        "url": "https://www.detran.ms.gov.br/detran-ms-orienta-sobre-renovacao-automatica-da-cnh-para-bom-condutor-e-como-solicitar-a-versao-impressa/"
      }
    ],
    "custo": {
      "status": "pago",
      "valor_brl": null,
      "descricao": "Notícia informa R$ 202,91 em fevereiro/2026; valor de novembro não confirmado.",
      "fontes": [
        "ms-cnh-impressa"
      ]
    },
    "prazo": {
      "status": "pendente",
      "descricao": "Prazo específico não confirmado.",
      "fontes": [
        "ms-cnh-carta"
      ]
    },
    "observacoes": [
      "Não aplicado prazo genérico de sete dias da carta de renovação."
    ],
    "fontes": [
      {
        "id": "ms-cnh-carta",
        "url": "https://www.detran.ms.gov.br/servicos-em-destaque/solicitar-segunda-via-da-carteira-nacional-de-habilitacao-cnh-ou-permissao-para-dirigir-ppd/",
        "titulo": "Solicitar segunda via da CNH ou PPD",
        "orgao": "Detran-MS",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "objeto do serviço"
        ],
        "limitacoes": [
          "Página não descreve documentação, custo ou prazo."
        ]
      },
      {
        "id": "ms-cnh-impressa",
        "url": "https://www.detran.ms.gov.br/detran-ms-orienta-sobre-renovacao-automatica-da-cnh-para-bom-condutor-e-como-solicitar-a-versao-impressa/",
        "titulo": "Orientações de emissão física — 09/02/2026",
        "orgao": "Detran-MS",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "segunda via",
          "canais",
          "endereço",
          "taxa histórica"
        ],
        "limitacoes": [
          "R$ 202,91 é UFERMS fevereiro/2026; não confirma novembro. Regras de renovação automática da notícia não usadas como regra vigente."
        ]
      },
      {
        "id": "ms-guia-2017",
        "url": "https://servonline.detran.ms.gov.br/despachantes/download/guia_cnh_digital_vs%204.3_cfc.pdf",
        "titulo": "Guia CNH Digital v4.3 — checklists",
        "orgao": "Detran-MS",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "documento_lido",
        "sustenta": [
          "documentação histórica"
        ],
        "limitacoes": [
          "Manual antigo; não comprova checklist vigente em novembro/2026."
        ]
      },
      {
        "id": "ms-cnh-entrega",
        "url": "https://www.detran.ms.gov.br/nova-entrega-da-cnh-sera-por-sedex-e-documento-que-retornar-ficara-nos-correios/",
        "titulo": "Nova entrega da CNH por Sedex — 23/10/2026",
        "orgao": "Detran-MS",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "entrega",
          "endereço"
        ],
        "limitacoes": [
          "Não informa duração total do serviço; data de início escrita como segunda-feira (29), inconsistente com publicação."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Confirmar checklist atual, taxa vigente e prazo específico."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "ms-cnh-renovacao",
    "servico_base": "cnh-renovacao",
    "nome": "Renovar a CNH",
    "nomes_populares": [
      "Renovar habilitação",
      "Renovar carteira de motorista",
      "carteira de motorista"
    ],
    "categoria": "habilitacao",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "MS",
      "municipio": null
    },
    "orgao_responsavel": "Detran-MS",
    "descricao": "Renovar os exames necessários à habilitação.",
    "publico": "Condutor habilitado.",
    "condicoes_acesso": [
      "Atendimento e exames segundo perfil."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "CNH original ou documento de identificação",
        "observacao": "Manual antigo; reconfirmar documentação vigente.",
        "fontes": [
          "ms-guia-2017"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "Formulário RENACH",
        "quando": "Processo presencial conforme manual",
        "observacao": "Manual dispensa no processo digital; confirmar regra atual.",
        "fontes": [
          "ms-guia-2017"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Acessar CNH Ágil no Meu Detran e solicitar renovação.",
        "canal_url": "https://www2.meudetran.ms.gov.br/habilitacao.php",
        "fontes": [
          "ms-carta-portal"
        ]
      },
      {
        "ordem": 2,
        "acao": "Emitir e pagar guia; cumprir exames indicados.",
        "canal_url": "https://www.ms.gov.br/transito-e-transportes/emissao-da-carteira-nacional-de-habilitacao174/imprimir",
        "fontes": [
          "ms-carta-portal"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Canal oficial do serviço",
        "url": "https://www2.meudetran.ms.gov.br/habilitacao.php"
      },
      {
        "tipo": "web",
        "nome": "Canal oficial do serviço",
        "url": "https://www.ms.gov.br/transito-e-transportes/emissao-da-carteira-nacional-de-habilitacao174/imprimir"
      }
    ],
    "custo": {
      "status": "pago",
      "valor_brl": null,
      "descricao": "Guia e exames conforme processo; valor não confirmado.",
      "fontes": [
        "ms-carta-portal"
      ]
    },
    "prazo": {
      "status": "com_ressalva",
      "descricao": "Carta indexada informa sete dias úteis, mas mistura serviços e não define marco inicial; reconfirmar.",
      "fontes": [
        "ms-carta-portal"
      ]
    },
    "observacoes": [
      "Renovação convencional separada da segunda via e da renovação automática."
    ],
    "fontes": [
      {
        "id": "ms-renovacao-carta",
        "url": "https://www.detran.ms.gov.br/servicos-em-destaque/pedir-renovacao-da-carteira-nacional-de-habilitacao-cnh/",
        "titulo": "Pedir renovação da CNH",
        "orgao": "Detran-MS",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "objeto do serviço"
        ],
        "limitacoes": [
          "Página resumida."
        ]
      },
      {
        "id": "ms-carta-portal",
        "url": "https://www.ms.gov.br/transito-e-transportes/emissao-da-carteira-nacional-de-habilitacao174/imprimir",
        "titulo": "Pedir renovação — carta estadual",
        "orgao": "Detran-MS / Portal MS",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "trecho_indexado",
        "sustenta": [
          "renovação",
          "segunda via",
          "etapas"
        ],
        "limitacoes": [
          "Página aberta sem texto, exige JavaScript. Mistura vários serviços; prazo genérico de sete dias não aplicado à segunda via."
        ]
      },
      {
        "id": "ms-guia-2017",
        "url": "https://servonline.detran.ms.gov.br/despachantes/download/guia_cnh_digital_vs%204.3_cfc.pdf",
        "titulo": "Guia CNH Digital v4.3 — checklists",
        "orgao": "Detran-MS",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "documento_lido",
        "sustenta": [
          "documentação histórica"
        ],
        "limitacoes": [
          "Manual antigo; não comprova checklist vigente em novembro/2026."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Confirmar checklist, exames condicionais, taxas e marco inicial do prazo."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "es-cin",
    "servico_base": "cin-primeira",
    "nome": "Solicitar a primeira CIN",
    "nomes_populares": [
      "RG",
      "Identidade nacional",
      "nova identidade"
    ],
    "categoria": "identificacao_civil",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "ES",
      "municipio": null
    },
    "orgao_responsavel": "Polícia Científica do Espírito Santo — Instituto de Identificação",
    "descricao": "Emitir a primeira identidade nacional no Espírito Santo.",
    "publico": "Pessoas que solicitam a primeira CIN.",
    "condicoes_acesso": [
      "No Faça Fácil: brasileiro nato e CPF regular ou pendente de regularização."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "Certidão do estado civil",
        "observacao": "Original ou cópia autenticada; nascimento para solteiro; casamento e averbações cabíveis.",
        "fontes": [
          "es-cin-ff"
        ]
      },
      {
        "documento": "Comprovante ou declaração de residência",
        "observacao": "Original; faturas aceitas com até 60 dias no Faça Fácil.",
        "fontes": [
          "es-cin-ff"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "Foto 3x4",
        "quando": "Crianças de 0 a 3 anos no Faça Fácil",
        "observacao": "Demais pessoas são fotografadas no atendimento.",
        "fontes": [
          "es-cin-ff"
        ]
      },
      {
        "documento": "Identificação e CPF do responsável",
        "quando": "Menor de 16 anos",
        "observacao": "Comprovar representação ou autorização conforme o caso.",
        "fontes": [
          "es-cin-ff"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Consultar posto e agendar.",
        "canal_url": "https://agenda.es.gov.br/",
        "fontes": [
          "es-cin-ff"
        ]
      },
      {
        "ordem": 2,
        "acao": "Comparecer com a documentação.",
        "canal_url": "https://facafacil.es.gov.br/servicos/cin-carteira-de-identidade-nacional-primeira-e-segunda-via",
        "fontes": [
          "es-cin-ff"
        ]
      },
      {
        "ordem": 3,
        "acao": "Consultar emissão pelo canal da PCIES.",
        "canal_url": "https://cin-pci.sesp.es.gov.br/Vsoft.iDSPS.Agendamento/",
        "fontes": [
          "es-cin-faq"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Faça Fácil — CIN",
        "url": "https://facafacil.es.gov.br/servicos/cin-carteira-de-identidade-nacional-primeira-e-segunda-via"
      },
      {
        "tipo": "web",
        "nome": "PCIES — Perguntas frequentes",
        "url": "https://pci.es.gov.br/perguntas-frequentes?contato=3-carteira-de-identidade-nacional"
      },
      {
        "tipo": "web",
        "nome": "PCIES — CIN",
        "url": "https://pci.es.gov.br/cin"
      }
    ],
    "custo": {
      "status": "gratuito",
      "valor_brl": 0,
      "descricao": "Primeira CIN gratuita.",
      "fontes": [
        "es-cin-faq"
      ]
    },
    "prazo": {
      "status": "confirmado",
      "descricao": "Até 90 dias consecutivos para expedição, segundo FAQ.",
      "fontes": [
        "es-cin-faq"
      ]
    },
    "observacoes": [],
    "fontes": [
      {
        "id": "es-cin-ff",
        "url": "https://facafacil.es.gov.br/servicos/cin-carteira-de-identidade-nacional-primeira-e-segunda-via",
        "titulo": "Faça Fácil — CIN",
        "orgao": "Faça Fácil / PCIES",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "descrição",
          "público",
          "condições",
          "documentação",
          "etapas",
          "custo",
          "prazo"
        ],
        "limitacoes": [
          "Regras desta unidade; não generalizar a todos os postos."
        ]
      },
      {
        "id": "es-cin-faq",
        "url": "https://pci.es.gov.br/perguntas-frequentes?contato=3-carteira-de-identidade-nacional",
        "titulo": "PCIES — Perguntas frequentes",
        "orgao": "PCIES",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "gratuidade",
          "prazo",
          "consulta de emissão"
        ],
        "limitacoes": []
      },
      {
        "id": "es-cin-pci",
        "url": "https://pci.es.gov.br/cin",
        "titulo": "PCIES — CIN",
        "orgao": "PCIES",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "órgão",
          "postos",
          "orientações"
        ],
        "limitacoes": [
          "Documentação incorporada por Infogram não teve texto extraído."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Revalidar exigências fora do Faça Fácil, inclusive emissão sem CPF e nacionalidades específicas."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "es-cnh",
    "servico_base": "cnh-segunda-via",
    "nome": "Solicitar segunda via da CNH",
    "nomes_populares": [
      "Segunda via da carteira de motorista",
      "carteira de motorista"
    ],
    "categoria": "habilitacao",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "ES",
      "municipio": null
    },
    "orgao_responsavel": "Detran-ES",
    "descricao": "Reemitir CNH ou permissão por perda ou dano.",
    "publico": "Condutor.",
    "condicoes_acesso": [
      "CNH emitida no ES após 29/11/2007, sem impedimento, suspensão, cassação ou permissão cancelada.",
      "Exame médico não pode vencer em até 30 dias.",
      "Sem alteração de dados ou fotografia."
    ],
    "documentos_obrigatorios": [],
    "documentos_status": "pendente",
    "documentos_condicionais": [],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Abrir pedido online.",
        "canal_url": "https://renach2.es.gov.br/Habilitacao/Publico/pub_solicitar_servico_online.aspx?TipoServico=S",
        "fontes": [
          "es-cnh-pagina"
        ]
      },
      {
        "ordem": 2,
        "acao": "Pagar DUA e acompanhar entrega no endereço informado.",
        "canal_url": "https://detran.es.gov.br/perda-ou-dano-2",
        "fontes": [
          "es-cnh-pagina"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Detran-ES — Perda ou dano",
        "url": "https://detran.es.gov.br/perda-ou-dano-2"
      }
    ],
    "custo": {
      "status": "pago",
      "valor_brl": null,
      "descricao": "Taxa de serviço por DUA; valor deve ser conferido na tabela oficial.",
      "fontes": [
        "es-cnh-pagina"
      ]
    },
    "prazo": {
      "status": "confirmado",
      "descricao": "Até 7 dias úteis após abertura do processo.",
      "fontes": [
        "es-cnh-pagina"
      ]
    },
    "observacoes": [
      "Furto/roubo tem fluxo separado; esta ficha cobre perda/dano."
    ],
    "fontes": [
      {
        "id": "es-cnh-pagina",
        "url": "https://detran.es.gov.br/perda-ou-dano-2",
        "titulo": "Detran-ES — Perda ou dano",
        "orgao": "Detran-ES",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "descrição",
          "público",
          "condições",
          "documentação",
          "etapas",
          "custo",
          "prazo"
        ],
        "limitacoes": [
          "Página menciona documentos abaixo, mas não apresenta a lista."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Lista documental e valor da taxa não confirmados."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "es-cnh-renovacao",
    "servico_base": "cnh-renovacao",
    "nome": "Renovar a CNH",
    "nomes_populares": [
      "Renovar habilitação",
      "Renovar carteira de motorista",
      "carteira de motorista"
    ],
    "categoria": "habilitacao",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "ES",
      "municipio": null
    },
    "orgao_responsavel": "Detran-ES",
    "descricao": "Renovar a habilitação.",
    "publico": "Condutor.",
    "condicoes_acesso": [],
    "documentos_obrigatorios": [
      {
        "documento": "Identificação oficial com foto",
        "observacao": "Original; admite documentos substitutos listados na página.",
        "fontes": [
          "es-renovacao"
        ]
      },
      {
        "documento": "CPF",
        "observacao": "Original.",
        "fontes": [
          "es-renovacao"
        ]
      },
      {
        "documento": "Comprovante ou declaração de residência",
        "observacao": "Original ou cópia autenticada; faturas com até 90 dias.",
        "fontes": [
          "es-renovacao"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "Comprovante de parentesco",
        "quando": "Endereço comprovado por documento de familiar",
        "observacao": "A página admite familiares especificados.",
        "fontes": [
          "es-renovacao"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Abrir processo e agendar biometria.",
        "canal_url": "https://detran.es.gov.br/renovacao-de-cnh",
        "fontes": [
          "es-renovacao"
        ]
      },
      {
        "ordem": 2,
        "acao": "Comparecer à clínica indicada para exames.",
        "canal_url": "https://detran.es.gov.br/renovacao-de-cnh",
        "fontes": [
          "es-renovacao"
        ]
      },
      {
        "ordem": 3,
        "acao": "Após aptidão, pagar DUA e aguardar entrega.",
        "canal_url": "https://detran.es.gov.br/renovacao-de-cnh",
        "fontes": [
          "es-renovacao"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Detran-ES — Renovação",
        "url": "https://detran.es.gov.br/renovacao-de-cnh"
      }
    ],
    "custo": {
      "status": "pago",
      "valor_brl": null,
      "descricao": "Taxa e exames pagos; psicológico para condutor profissional.",
      "fontes": [
        "es-renovacao"
      ]
    },
    "prazo": {
      "status": "com_ressalva",
      "descricao": "Página informa até 5 dias úteis, sem definir marco inicial.",
      "fontes": [
        "es-renovacao"
      ]
    },
    "observacoes": [
      "A redação sobre toxicológico é genérica para condutor profissional; confirmar incidência por categoria."
    ],
    "fontes": [
      {
        "id": "es-renovacao",
        "url": "https://detran.es.gov.br/renovacao-de-cnh",
        "titulo": "Detran-ES — Renovação",
        "orgao": "Detran-ES",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "descrição",
          "público",
          "condições",
          "documentação",
          "etapas",
          "custo",
          "prazo"
        ],
        "limitacoes": []
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Valores e marco inicial do prazo não confirmados; conferir regra do toxicológico."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "mg-cin",
    "servico_base": "cin-primeira",
    "nome": "Solicitar a primeira CIN",
    "nomes_populares": [
      "RG",
      "Identidade nacional",
      "nova identidade"
    ],
    "categoria": "identificacao_civil",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "MG",
      "municipio": null
    },
    "orgao_responsavel": "Polícia Civil de Minas Gerais",
    "descricao": "Emitir a primeira identidade nacional.",
    "publico": "Brasileiros.",
    "condicoes_acesso": [],
    "documentos_obrigatorios": [
      {
        "documento": "Certidão de nascimento ou casamento",
        "observacao": "Conforme estado civil.",
        "fontes": [
          "mg-cin-portal"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "Número do CPF",
        "quando": "Se já inscrito",
        "observacao": "Sem CPF, a página prevê inscrição durante atendimento.",
        "fontes": [
          "mg-cin-portal"
        ]
      },
      {
        "documento": "Foto 3x4",
        "quando": "Criança de colo",
        "observacao": "Nos demais casos a foto é capturada na unidade.",
        "fontes": [
          "mg-cin-portal"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Agendar no Cidadão MG ou MGApp.",
        "canal_url": "https://cidadao.mg.gov.br/",
        "fontes": [
          "mg-cin-portal"
        ]
      },
      {
        "ordem": 2,
        "acao": "Comparecer com os documentos.",
        "canal_url": "https://www.mg.gov.br/servico/obter-carteira-de-identidade-nacional",
        "fontes": [
          "mg-cin-portal"
        ]
      },
      {
        "ordem": 3,
        "acao": "Receber pelos Correios e acessar CIN digital no gov.br.",
        "canal_url": "https://www.mg.gov.br/servico/obter-carteira-de-identidade-nacional",
        "fontes": [
          "mg-cin-portal"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Portal MG — Obter CIN",
        "url": "https://www.mg.gov.br/servico/obter-carteira-de-identidade-nacional"
      }
    ],
    "custo": {
      "status": "gratuito",
      "valor_brl": 0,
      "descricao": "Primeira emissão gratuita.",
      "fontes": [
        "mg-cin-portal"
      ]
    },
    "prazo": {
      "status": "com_ressalva",
      "descricao": "Aproximadamente 15 dias úteis.",
      "fontes": [
        "mg-cin-portal"
      ]
    },
    "observacoes": [
      "Se o município não aparecer no agendamento, a página orienta procurar o posto local."
    ],
    "fontes": [
      {
        "id": "mg-cin-portal",
        "url": "https://www.mg.gov.br/servico/obter-carteira-de-identidade-nacional",
        "titulo": "Portal MG — Obter CIN",
        "orgao": "Polícia Civil de Minas Gerais",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "descrição",
          "público",
          "condições",
          "documentação",
          "etapas",
          "custo",
          "prazo"
        ],
        "limitacoes": []
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Regras completas de representação de menores devem ser conferidas na unidade."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "mg-cnh",
    "servico_base": "cnh-segunda-via",
    "nome": "Solicitar segunda via da CNH",
    "nomes_populares": [
      "Segunda via da carteira de motorista",
      "carteira de motorista"
    ],
    "categoria": "habilitacao",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "MG",
      "municipio": null
    },
    "orgao_responsavel": "Detran-MG",
    "descricao": "Reemitir CNH, PPD ou ACC sem alterar dados.",
    "publico": "Condutor com documento perdido, furtado, roubado ou destruído.",
    "condicoes_acesso": [
      "Conta gov.br prata ou ouro.",
      "CNH de outra UF exige transferência; mudanças de dados usam serviço distinto."
    ],
    "documentos_obrigatorios": [],
    "documentos_status": "nao_se_aplica",
    "documentos_condicionais": [
      {
        "documento": "Documento oficial com foto e CPF",
        "quando": "Retirada presencial",
        "observacao": "Representante necessita documentação adicional conforme vínculo e local.",
        "fontes": [
          "mg-segunda"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Atualizar endereço de entrega.",
        "canal_url": "https://www.mg.gov.br/servico/solicitar-2a-da-cnh-ppd-ou-acc-sem-alterar-dados",
        "fontes": [
          "mg-segunda"
        ]
      },
      {
        "ordem": 2,
        "acao": "Preencher formulário com gov.br; emitir e pagar DAE.",
        "canal_url": "https://www.mg.gov.br/servico/solicitar-2a-da-cnh-ppd-ou-acc-sem-alterar-dados",
        "fontes": [
          "mg-segunda"
        ]
      },
      {
        "ordem": 3,
        "acao": "Acompanhar a entrega pelos Correios.",
        "canal_url": "https://www.mg.gov.br/servico/solicitar-2a-da-cnh-ppd-ou-acc-sem-alterar-dados",
        "fontes": [
          "mg-segunda"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Portal MG — Segunda via sem alterar dados",
        "url": "https://www.mg.gov.br/servico/solicitar-2a-da-cnh-ppd-ou-acc-sem-alterar-dados"
      }
    ],
    "custo": {
      "status": "pago",
      "valor_brl": 138.96,
      "descricao": "DAE de R$ 138,96 exibido na consulta.",
      "fontes": [
        "mg-segunda"
      ]
    },
    "prazo": {
      "status": "confirmado",
      "descricao": "Até 10 dias úteis após pagamento.",
      "fontes": [
        "mg-segunda"
      ]
    },
    "observacoes": [
      "Conta de acesso não é documento físico obrigatório."
    ],
    "fontes": [
      {
        "id": "mg-segunda",
        "url": "https://www.mg.gov.br/servico/solicitar-2a-da-cnh-ppd-ou-acc-sem-alterar-dados",
        "titulo": "Portal MG — Segunda via sem alterar dados",
        "orgao": "Detran-MG",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "descrição",
          "público",
          "condições",
          "documentação",
          "etapas",
          "custo",
          "prazo"
        ],
        "limitacoes": []
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "confirmado",
    "pendencias": [],
    "apto_catalogo": "sim"
  },
  {
    "id": "mg-cnh-renovacao",
    "servico_base": "cnh-renovacao",
    "nome": "Renovar CNH (A, AB ou B) ou ACC",
    "nomes_populares": [
      "Renovar habilitação",
      "Renovar carteira de motorista",
      "carteira de motorista"
    ],
    "categoria": "habilitacao",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "MG",
      "municipio": null
    },
    "orgao_responsavel": "Detran-MG",
    "descricao": "Renovar habilitação nas categorias A, AB ou B, ou ACC.",
    "publico": "Condutor dessas categorias.",
    "condicoes_acesso": [
      "Conta gov.br prata ou ouro; registro de outra UF exige transferência."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "Identificação oficial com foto e CPF",
        "observacao": "Apresentar nos exames.",
        "fontes": [
          "mg-renovacao"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "Documentação do representante",
        "quando": "Retirada por terceiro",
        "observacao": "Varia entre Correios e UAI/Ciretran; conferir página.",
        "fontes": [
          "mg-renovacao"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Atualizar endereço, preencher formulário e pagar DAE.",
        "canal_url": "https://www.mg.gov.br/servico/renovar-cnh-categorias-ab-ou-b-ou-acc",
        "fontes": [
          "mg-renovacao"
        ]
      },
      {
        "ordem": 2,
        "acao": "Agendar e realizar exame médico; psicológico para EAR ou quando indicado.",
        "canal_url": "https://www.mg.gov.br/servico/renovar-cnh-categorias-ab-ou-b-ou-acc",
        "fontes": [
          "mg-renovacao"
        ]
      },
      {
        "ordem": 3,
        "acao": "Acompanhar entrega pelos Correios.",
        "canal_url": "https://www.mg.gov.br/servico/renovar-cnh-categorias-ab-ou-b-ou-acc",
        "fontes": [
          "mg-renovacao"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Portal MG — Renovar CNH A, AB, B ou ACC",
        "url": "https://www.mg.gov.br/servico/renovar-cnh-categorias-ab-ou-b-ou-acc"
      }
    ],
    "custo": {
      "status": "variavel",
      "valor_brl": null,
      "descricao": "DAE R$ 138,96; exame médico R$ 232,23; psicológico, quando exigido, R$ 232,23.",
      "fontes": [
        "mg-renovacao"
      ]
    },
    "prazo": {
      "status": "confirmado",
      "descricao": "Até 10 dias úteis após realização dos exames.",
      "fontes": [
        "mg-renovacao"
      ]
    },
    "observacoes": [],
    "fontes": [
      {
        "id": "mg-renovacao",
        "url": "https://www.mg.gov.br/servico/renovar-cnh-categorias-ab-ou-b-ou-acc",
        "titulo": "Portal MG — Renovar CNH A, AB, B ou ACC",
        "orgao": "Detran-MG",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "descrição",
          "público",
          "condições",
          "documentação",
          "etapas",
          "custo",
          "prazo"
        ],
        "limitacoes": []
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Categorias C/D/E não cobertas: link oficial direcionou a página sem conteúdo legível. Valores devem ser reconferidos na guia/clínica."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "rj-cin",
    "servico_base": "cin-primeira",
    "nome": "Solicitar a primeira CIN",
    "nomes_populares": [
      "RG",
      "Identidade nacional",
      "nova identidade"
    ],
    "categoria": "identificacao_civil",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "RJ",
      "municipio": null
    },
    "orgao_responsavel": "Detran-RJ — Identificação Civil",
    "descricao": "Emitir primeira CIN.",
    "publico": "Quem nunca solicitou CIN em qualquer UF.",
    "condicoes_acesso": [],
    "documentos_obrigatorios": [
      {
        "documento": "Certidão conforme estado civil",
        "observacao": "Original ou cópia autenticada.",
        "fontes": [
          "rj-cin-pagina"
        ]
      },
      {
        "documento": "Comprovante ou declaração de residência",
        "observacao": "Modelo do Detran-RJ.",
        "fontes": [
          "rj-cin-pagina"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "Comprovante do CPF",
        "quando": "Se já inscrito",
        "observacao": "Sem CPF, carta prevê inscrição simultânea.",
        "fontes": [
          "rj-cin-pagina"
        ]
      },
      {
        "documento": "Certificado ou documento de naturalização/igualdade",
        "quando": "Naturalizados ou portugueses com igualdade",
        "observacao": "Conforme condição do requerente.",
        "fontes": [
          "rj-cin-pagina"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Agendar pelo Detran RJ Digital com gov.br.",
        "canal_url": "https://servicos.detran.rj.gov.br/",
        "fontes": [
          "rj-agendamento-novo"
        ]
      },
      {
        "ordem": 2,
        "acao": "Comparecer com documentos e guardar protocolo.",
        "canal_url": "https://www.detran.rj.gov.br/todos-os-servicos/servicos-dic/1-via-de-identidade.html",
        "fontes": [
          "rj-cin-pagina"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Detran-RJ — Primeira CIN",
        "url": "https://www.detran.rj.gov.br/todos-os-servicos/servicos-dic/1-via-de-identidade.html"
      },
      {
        "tipo": "web",
        "nome": "Detran-RJ — Agendamento digital desde 11/11/2026",
        "url": "https://www.detran.rj.gov.br/noticias/agendamentos-de-identificacao-civil-no-detran-rj-passam-a-ser-exclusivamente-digitais-a-partir-desta-quarta-feira-11-11.html"
      }
    ],
    "custo": {
      "status": "gratuito",
      "valor_brl": 0,
      "descricao": "Primeira CIN gratuita.",
      "fontes": [
        "rj-cin-pagina"
      ]
    },
    "prazo": {
      "status": "pendente",
      "descricao": "Não confirmado nesta pesquisa.",
      "fontes": [
        "rj-cin-pagina"
      ]
    },
    "observacoes": [
      "Desde 11/11/2026, telefone oferece orientação e não agendamento."
    ],
    "fontes": [
      {
        "id": "rj-cin-pagina",
        "url": "https://www.detran.rj.gov.br/todos-os-servicos/servicos-dic/1-via-de-identidade.html",
        "titulo": "Detran-RJ — Primeira CIN",
        "orgao": "Detran-RJ",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "descrição",
          "público",
          "condições",
          "documentação",
          "etapas",
          "custo",
          "prazo"
        ],
        "limitacoes": [
          "Não esclarece agendamento de pessoa sem CPF."
        ]
      },
      {
        "id": "rj-agendamento-novo",
        "url": "https://www.detran.rj.gov.br/noticias/agendamentos-de-identificacao-civil-no-detran-rj-passam-a-ser-exclusivamente-digitais-a-partir-desta-quarta-feira-11-11.html",
        "titulo": "Detran-RJ — Agendamento digital desde 11/11/2026",
        "orgao": "Detran-RJ",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "agendamento",
          "gov.br",
          "telefone apenas orientativo"
        ],
        "limitacoes": []
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Prazo não confirmado.",
      "Sem CPF: inscrição simultânea consta na carta, mas acesso ao agendamento exige gov.br; canal aplicável continua pendente."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "rj-cnh",
    "servico_base": "cnh-segunda-via",
    "nome": "Solicitar segunda via da CNH",
    "nomes_populares": [
      "Segunda via da carteira de motorista",
      "carteira de motorista"
    ],
    "categoria": "habilitacao",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "RJ",
      "municipio": null
    },
    "orgao_responsavel": "Detran-RJ",
    "descricao": "Reemitir CNH por dano, perda, furto ou roubo.",
    "publico": "Condutor.",
    "condicoes_acesso": [
      "Registro de outra UF requer transferência; requerimento anterior deve estar encerrado."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "Identificação oficial válida",
        "observacao": "Foto, filiação e naturalidade.",
        "fontes": [
          "rj-segunda"
        ]
      },
      {
        "documento": "Comprovante de CPF",
        "observacao": "Apresentar.",
        "fontes": [
          "rj-segunda"
        ]
      },
      {
        "documento": "Comprovante ou declaração de residência",
        "observacao": "Original.",
        "fontes": [
          "rj-segunda"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "DUDA pago",
        "quando": "Quando houver cobrança",
        "observacao": "Código 214-3.",
        "fontes": [
          "rj-segunda"
        ]
      },
      {
        "documento": "Requerimento e ocorrência policial",
        "quando": "Isenção por furto/roubo",
        "observacao": "CNH deve constar como item subtraído; processo administrativo.",
        "fontes": [
          "rj-segunda"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Pagar taxa aplicável e agendar digitalmente.",
        "canal_url": "https://servicos.detran.rj.gov.br/",
        "fontes": [
          "rj-agendamento-novo"
        ]
      },
      {
        "ordem": 2,
        "acao": "Apresentar documentos no posto.",
        "canal_url": "https://detran.rj.gov.br/todos-os-servicos/servicos-hab/2-via-de-habilitacao.html",
        "fontes": [
          "rj-segunda"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Detran-RJ — Segunda via da habilitação",
        "url": "https://detran.rj.gov.br/todos-os-servicos/servicos-hab/2-via-de-habilitacao.html"
      },
      {
        "tipo": "web",
        "nome": "Detran-RJ — Agendamento digital",
        "url": "https://www.detran.rj.gov.br/noticias/agendamentos-de-identificacao-civil-no-detran-rj-passam-a-ser-exclusivamente-digitais-a-partir-desta-quarta-feira-11-11.html"
      }
    ],
    "custo": {
      "status": "pago",
      "valor_brl": 209.78,
      "descricao": "DUDA R$ 209,78; isenção por furto/roubo exige processo.",
      "fontes": [
        "rj-segunda"
      ]
    },
    "prazo": {
      "status": "pendente",
      "descricao": "Não confirmado nesta pesquisa.",
      "fontes": [
        "rj-segunda"
      ]
    },
    "observacoes": [],
    "fontes": [
      {
        "id": "rj-segunda",
        "url": "https://detran.rj.gov.br/todos-os-servicos/servicos-hab/2-via-de-habilitacao.html",
        "titulo": "Detran-RJ — Segunda via da habilitação",
        "orgao": "Detran-RJ",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "descrição",
          "público",
          "condições",
          "documentação",
          "etapas",
          "custo",
          "prazo"
        ],
        "limitacoes": [
          "Telefone de agendamento na carta foi superado por notícia de 10/11."
        ]
      },
      {
        "id": "rj-agendamento-novo",
        "url": "https://www.detran.rj.gov.br/noticias/agendamentos-de-identificacao-civil-no-detran-rj-passam-a-ser-exclusivamente-digitais-a-partir-desta-quarta-feira-11-11.html",
        "titulo": "Detran-RJ — Agendamento digital desde 11/11/2026",
        "orgao": "Detran-RJ",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "agendamento"
        ],
        "limitacoes": []
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Prazo de emissão não confirmado."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "rj-cnh-renovacao",
    "servico_base": "cnh-renovacao",
    "nome": "Renovar CNH — procedimento padrão",
    "nomes_populares": [
      "Renovar habilitação",
      "Renovar carteira de motorista",
      "carteira de motorista"
    ],
    "categoria": "habilitacao",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "RJ",
      "municipio": null
    },
    "orgao_responsavel": "Detran-RJ",
    "descricao": "Renovar habilitação vencida ou próxima do vencimento.",
    "publico": "Condutor que segue a renovação padrão.",
    "condicoes_acesso": [
      "Transferir registro de outra UF antes do pedido."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "Identificação e CPF",
        "observacao": "Originais/comprovante; carta admite CNH vencida para identificação.",
        "fontes": [
          "rj-renovacao"
        ]
      },
      {
        "documento": "Comprovante ou declaração de residência",
        "observacao": "Original e cópia do comprovante.",
        "fontes": [
          "rj-renovacao"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "DUDA pago",
        "quando": "Quando cobrado",
        "observacao": "Código 204-6.",
        "fontes": [
          "rj-renovacao"
        ]
      },
      {
        "documento": "Certidão de nascimento/casamento",
        "quando": "Naturalidade incompleta",
        "observacao": "Completar município e UF.",
        "fontes": [
          "rj-renovacao"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Pagar taxa cabível e iniciar pelo Detran RJ Digital.",
        "canal_url": "https://servicos.detran.rj.gov.br/",
        "fontes": [
          "rj-agendamento-novo"
        ]
      },
      {
        "ordem": 2,
        "acao": "Fazer biometria e exames: médico; psicológico para EAR; toxicológico C/D/E.",
        "canal_url": "https://www.detran.rj.gov.br/todos-os-servicos/servicos-hab/renovacao-da-habilitacao.html",
        "fontes": [
          "rj-renovacao"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Detran-RJ — Renovação da habilitação",
        "url": "https://www.detran.rj.gov.br/todos-os-servicos/servicos-hab/renovacao-da-habilitacao.html"
      },
      {
        "tipo": "web",
        "nome": "Detran-RJ — Agendamento digital",
        "url": "https://www.detran.rj.gov.br/noticias/agendamentos-de-identificacao-civil-no-detran-rj-passam-a-ser-exclusivamente-digitais-a-partir-desta-quarta-feira-11-11.html"
      }
    ],
    "custo": {
      "status": "pago",
      "valor_brl": 209.78,
      "descricao": "DUDA R$ 209,78, exames à parte. Página prevê isenção por idade.",
      "fontes": [
        "rj-renovacao"
      ]
    },
    "prazo": {
      "status": "pendente",
      "descricao": "Não confirmado nesta pesquisa.",
      "fontes": [
        "rj-renovacao"
      ]
    },
    "observacoes": [
      "Não generalizar o procedimento padrão a quem tiver renovação automática."
    ],
    "fontes": [
      {
        "id": "rj-renovacao",
        "url": "https://www.detran.rj.gov.br/todos-os-servicos/servicos-hab/renovacao-da-habilitacao.html",
        "titulo": "Detran-RJ — Renovação da habilitação",
        "orgao": "Detran-RJ",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "descrição",
          "público",
          "condições",
          "documentação",
          "etapas",
          "custo",
          "prazo"
        ],
        "limitacoes": [
          "Página mistura atualização recente e referências antigas."
        ]
      },
      {
        "id": "rj-agendamento-novo",
        "url": "https://www.detran.rj.gov.br/noticias/agendamentos-de-identificacao-civil-no-detran-rj-passam-a-ser-exclusivamente-digitais-a-partir-desta-quarta-feira-11-11.html",
        "titulo": "Detran-RJ — Agendamento digital desde 11/11/2026",
        "orgao": "Detran-RJ",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "agendamento"
        ],
        "limitacoes": []
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Prazo não confirmado.",
      "Conferir isenção no limite de 60 anos: página alterna mais de 60 e 60 ou mais.",
      "Renovação automática é modalidade separada mencionada pela fonte; requisitos não auditados integralmente."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "sp-cin",
    "servico_base": "cin-primeira",
    "nome": "Solicitar a primeira CIN",
    "nomes_populares": [
      "RG",
      "Identidade nacional",
      "nova identidade"
    ],
    "categoria": "identificacao_civil",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "SP",
      "municipio": null
    },
    "orgao_responsavel": "IIRGD / Poupatempo",
    "descricao": "Emitir a primeira identidade nacional em São Paulo.",
    "publico": "Brasileiros e demais públicos admitidos na carta.",
    "condicoes_acesso": [],
    "documentos_obrigatorios": [
      {
        "documento": "Certidão conforme estado civil",
        "observacao": "Original ou autenticada, acompanhada de cópia simples; averbações atuais.",
        "fontes": [
          "sp-cin-poupa"
        ]
      },
      {
        "documento": "Número do CPF",
        "observacao": "Informar ou apresentar documento que o contenha.",
        "fontes": [
          "sp-cin-poupa"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [
      {
        "documento": "Autorização e identificação/CPF do responsável",
        "quando": "Menor de 16 anos",
        "observacao": "Conforme representação prevista na carta.",
        "fontes": [
          "sp-cin-poupa"
        ]
      },
      {
        "documento": "Documento de naturalização",
        "quando": "Brasileiro naturalizado",
        "observacao": "Certificado ou portaria; conferir condições específicas.",
        "fontes": [
          "sp-cin-poupa"
        ]
      }
    ],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Agendar individualmente pelo Poupatempo.",
        "canal_url": "https://www.poupatempo.sp.gov.br/carta/D97C3844-A2D9-4C9E-B364-CB4FEB26A1FB",
        "fontes": [
          "sp-cin-poupa"
        ]
      },
      {
        "ordem": 2,
        "acao": "Comparecer, apresentar documentos e realizar identificação.",
        "canal_url": "https://www.poupatempo.sp.gov.br/carta/D97C3844-A2D9-4C9E-B364-CB4FEB26A1FB",
        "fontes": [
          "sp-cin-poupa"
        ]
      },
      {
        "ordem": 3,
        "acao": "Acompanhar e retirar CIN; acessar versão digital no gov.br.",
        "canal_url": "https://www.poupatempo.sp.gov.br/carta/D97C3844-A2D9-4C9E-B364-CB4FEB26A1FB",
        "fontes": [
          "sp-cin-poupa"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Poupatempo — Obter CIN",
        "url": "https://www.poupatempo.sp.gov.br/carta/D97C3844-A2D9-4C9E-B364-CB4FEB26A1FB"
      }
    ],
    "custo": {
      "status": "gratuito",
      "valor_brl": 0,
      "descricao": "Primeira emissão gratuita.",
      "fontes": [
        "sp-cin-poupa"
      ]
    },
    "prazo": {
      "status": "confirmado",
      "descricao": "Etapa de entrega informa até 26 dias úteis.",
      "fontes": [
        "sp-cin-poupa"
      ]
    },
    "observacoes": [
      "A fonte da SSP sem texto legível foi substituída pela carta do Poupatempo.",
      "Certidão digital deve ser validada eletronicamente no atendimento."
    ],
    "fontes": [
      {
        "id": "sp-cin-poupa",
        "url": "https://www.poupatempo.sp.gov.br/carta/D97C3844-A2D9-4C9E-B364-CB4FEB26A1FB",
        "titulo": "Poupatempo — Obter CIN",
        "orgao": "IIRGD / Poupatempo",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "descrição",
          "público",
          "condições",
          "documentação",
          "etapas",
          "custo",
          "prazo"
        ],
        "limitacoes": []
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Carta repete documentação de naturalização na seção de reciprocidade; confirmar caso de igualdade de direitos."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "sp-cnh",
    "servico_base": "cnh-segunda-via",
    "nome": "Solicitar segunda via da CNH",
    "nomes_populares": [
      "Segunda via da carteira de motorista",
      "carteira de motorista"
    ],
    "categoria": "habilitacao",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "SP",
      "municipio": null
    },
    "orgao_responsavel": "Detran-SP",
    "descricao": "Reemitir CNH por perda, dano, roubo ou furto.",
    "publico": "Motorista ou procurador.",
    "condicoes_acesso": [
      "Mantém dados e validade; alteração exige outro serviço."
    ],
    "documentos_obrigatorios": [],
    "documentos_status": "pendente",
    "documentos_condicionais": [],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Acessar com CPF/senha ou gov.br.",
        "canal_url": "https://www.poupatempo.sp.gov.br/carta/D6BB72BC-80D9-4AC4-924C-7C8503F37367",
        "fontes": [
          "sp-segunda-indexado"
        ]
      },
      {
        "ordem": 2,
        "acao": "Preencher dados, validar e pagar Pix dentro do serviço.",
        "canal_url": "https://www.poupatempo.sp.gov.br/carta/D6BB72BC-80D9-4AC4-924C-7C8503F37367",
        "fontes": [
          "sp-segunda-indexado"
        ]
      },
      {
        "ordem": 3,
        "acao": "Acompanhar emissão e rastreamento.",
        "canal_url": "https://www.poupatempo.sp.gov.br/carta/D6BB72BC-80D9-4AC4-924C-7C8503F37367",
        "fontes": [
          "sp-segunda-indexado"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Poupatempo — Emitir segunda via da CNH",
        "url": "https://www.poupatempo.sp.gov.br/carta/D6BB72BC-80D9-4AC4-924C-7C8503F37367"
      },
      {
        "tipo": "web",
        "nome": "Serviços SP — Indisponibilidade",
        "url": "https://servicos.sp.gov.br/fcarta/D6BB72BC-80D9-4AC4-924C-7C8503F37367"
      }
    ],
    "custo": {
      "status": "pago",
      "valor_brl": null,
      "descricao": "Emissão e postagem cobradas; total não confirmado em página legível.",
      "fontes": [
        "sp-segunda-indexado"
      ]
    },
    "prazo": {
      "status": "com_ressalva",
      "descricao": "Trecho indexado: digital até 24h após expedição; física 3 dias úteis na capital ou 4 no interior, após código de rastreio.",
      "fontes": [
        "sp-segunda-indexado"
      ]
    },
    "observacoes": [
      "Não usar páginas de homologação como regra atual."
    ],
    "fontes": [
      {
        "id": "sp-segunda-indexado",
        "url": "https://www.poupatempo.sp.gov.br/carta/D6BB72BC-80D9-4AC4-924C-7C8503F37367",
        "titulo": "Poupatempo — Emitir segunda via da CNH",
        "orgao": "Detran-SP",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "trecho_indexado",
        "sustenta": [
          "descrição",
          "público",
          "condições",
          "documentação",
          "etapas",
          "custo",
          "prazo"
        ],
        "limitacoes": [
          "Conteúdo indexado; abertura direta retornou 500/indisponibilidade."
        ]
      },
      {
        "id": "sp-segunda-indisponivel",
        "url": "https://servicos.sp.gov.br/fcarta/D6BB72BC-80D9-4AC4-924C-7C8503F37367",
        "titulo": "Serviços SP — Indisponibilidade",
        "orgao": "Detran-SP",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "indisponibilidade"
        ],
        "limitacoes": [
          "Não apresentou a carta."
        ]
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Página de serviço indisponível; documentação, valor e fluxo completo aguardam leitura direta."
    ],
    "apto_catalogo": "com_ressalvas"
  },
  {
    "id": "sp-cnh-renovacao",
    "servico_base": "cnh-renovacao",
    "nome": "Renovar a CNH",
    "nomes_populares": [
      "Renovar habilitação",
      "Renovar carteira de motorista",
      "carteira de motorista"
    ],
    "categoria": "habilitacao",
    "abrangencia": "estadual",
    "localidade": {
      "uf": "SP",
      "municipio": null
    },
    "orgao_responsavel": "Detran-SP",
    "descricao": "Solicitar renovação e realizar exames obrigatórios.",
    "publico": "Motorista.",
    "condicoes_acesso": [
      "Acesso gov.br."
    ],
    "documentos_obrigatorios": [
      {
        "documento": "CPF, registro e espelho da CNH",
        "observacao": "Números solicitados na carta.",
        "fontes": [
          "sp-renovacao"
        ]
      }
    ],
    "documentos_status": "confirmado",
    "documentos_condicionais": [],
    "passo_a_passo": [
      {
        "ordem": 1,
        "acao": "Fazer toxicológico para C/D/E e iniciar pedido.",
        "canal_url": "https://servicos.sp.gov.br/fcarta/F8D2DBE7-66BE-4AEC-9B0F-25912922D566",
        "fontes": [
          "sp-renovacao"
        ]
      },
      {
        "ordem": 2,
        "acao": "Entrar com gov.br, conferir dados e escolher via física/digital.",
        "canal_url": "https://servicos.sp.gov.br/fcarta/F8D2DBE7-66BE-4AEC-9B0F-25912922D566",
        "fontes": [
          "sp-renovacao"
        ]
      },
      {
        "ordem": 3,
        "acao": "Realizar exame médico e psicológico se EAR; acompanhar emissão.",
        "canal_url": "https://servicos.sp.gov.br/fcarta/F8D2DBE7-66BE-4AEC-9B0F-25912922D566",
        "fontes": [
          "sp-renovacao"
        ]
      }
    ],
    "canais": [
      {
        "tipo": "web",
        "nome": "Serviços SP — Renovar CNH",
        "url": "https://servicos.sp.gov.br/fcarta/F8D2DBE7-66BE-4AEC-9B0F-25912922D566"
      }
    ],
    "custo": {
      "status": "variavel",
      "valor_brl": null,
      "descricao": "Digital gratuita; física R$ 126,79 + R$ 11; médico R$ 90; psicológico R$ 90 quando exigido; toxicológico variável.",
      "fontes": [
        "sp-renovacao"
      ]
    },
    "prazo": {
      "status": "com_ressalva",
      "descricao": "Digital até 24h após expedição; entrega física em 3 dias úteis na capital ou 4 no interior após código de rastreio.",
      "fontes": [
        "sp-renovacao"
      ]
    },
    "observacoes": [
      "Carta menciona prorrogação excepcional de vencimentos; conferir a situação individual no órgão."
    ],
    "fontes": [
      {
        "id": "sp-renovacao",
        "url": "https://servicos.sp.gov.br/fcarta/F8D2DBE7-66BE-4AEC-9B0F-25912922D566",
        "titulo": "Serviços SP — Renovar CNH",
        "orgao": "Detran-SP",
        "data_consulta": "2026-11-15",
        "tipo_evidencia": "pagina_lida",
        "sustenta": [
          "descrição",
          "público",
          "condições",
          "documentação",
          "etapas",
          "custo",
          "prazo"
        ],
        "limitacoes": []
      }
    ],
    "data_consulta": "2026-11-15",
    "status_conteudo": "parcial",
    "pendencias": [
      "Não interpretar os 4 dias anunciados na carta como prazo total incluindo exames."
    ],
    "apto_catalogo": "com_ressalvas"
  }
];

const servicosBase = [
  {
    "id": "cin-primeira",
    "nome": "Solicitar a primeira CIN",
    "categoria": "identificacao_civil",
    "descricao": "Emitir a Carteira de Identidade Nacional (CIN), a nova identidade com o número do CPF. O pedido, o órgão e o prazo mudam conforme o estado.",
    "nomes_populares": [
      "RG",
      "Identidade nacional",
      "nova identidade"
    ]
  },
  {
    "id": "cnh-segunda-via",
    "nome": "Solicitar segunda via da CNH",
    "categoria": "habilitacao",
    "descricao": "Reemitir a carteira de motorista por perda, roubo, furto ou dano. A taxa e o canal são definidos pelo Detran de cada estado.",
    "nomes_populares": [
      "Segunda via da carteira de motorista",
      "carteira de motorista"
    ]
  },
  {
    "id": "cnh-renovacao",
    "nome": "Renovar a CNH",
    "categoria": "habilitacao",
    "descricao": "Renovar a habilitação vencida ou perto de vencer, com os exames exigidos. Taxas, exames e canal mudam conforme o Detran do estado.",
    "nomes_populares": [
      "Renovar habilitação",
      "Renovar carteira de motorista",
      "carteira de motorista"
    ]
  }
];

const legendaStatus = {
  "confirmado": "Conteúdo essencial sustentado por fontes; consultar observações e custos/prazos.",
  "parcial": "Há limitação documental, conflito ou campo necessário pendente."
};

const legendaCusto = {
  "gratuito": "Sem cobrança para o procedimento descrito; custos acessórios ficam na descrição.",
  "pago": "Há cobrança. valor_brl traz o valor confirmado; null indica valor ainda não confirmado.",
  "variavel": "O valor depende do caso (componentes, exames, unidade, contrato); ver descrição.",
  "pendente": "Não foi possível confirmar se há cobrança."
};

const legendaPrazo = {
  "confirmado": "Prazo publicado pela fonte oficial.",
  "com_ressalva": "Prazo publicado com condições, estimativa, edital ou marco inicial incerto; ler descrição.",
  "pendente": "Prazo não localizado ou não confirmado."
};

const legendaDocumentos = {
  "confirmado": "documentos_obrigatorios traz a lista confirmada.",
  "nao_se_aplica": "O pedido é feito só com dados pessoais ou login; não há documento obrigatório a apresentar. Ver documentos_condicionais.",
  "pendente": "A lista de documentos obrigatórios ainda não foi confirmada."
};

const portaisEstaduais = [
  {
    "estado": "Maranhão",
    "sigla": "MA",
    "fonte": "Portal de serviços do Governo do Maranhão (ATI/SEAD)",
    "apis": [],
    "portais_servicos": [
      {
        "nome": "Portal de Serviços do Maranhão (EGMA)",
        "url": "https://egma.ma.gov.br/servicos",
        "utilidade": "alta"
      }
    ]
  },
  {
    "estado": "Piauí",
    "sigla": "PI",
    "fonte": "PI Digital (ATI-PI) e catálogo de serviços estaduais do gov.br",
    "apis": [],
    "portais_servicos": [
      {
        "nome": "PI Digital - Serviços ao Cidadão",
        "url": "https://pidigital.pi.gov.br/app/catalog/list/servicos-ao-cidadao",
        "utilidade": "alta"
      },
      {
        "nome": "Serviços estaduais do Piauí no gov.br",
        "url": "https://www.gov.br/pt-br/servicos-estaduais?uf=PI",
        "utilidade": "alta"
      }
    ]
  },
  {
    "estado": "Ceará",
    "sigla": "CE",
    "fonte": "Ceará Digital e catálogo de serviços estaduais do gov.br",
    "apis": [],
    "portais_servicos": [
      {
        "nome": "Ceará Digital - Serviços",
        "url": "https://cearadigital.ce.gov.br/servicos",
        "utilidade": "alta"
      },
      {
        "nome": "Portal de Serviços da Sefaz-CE",
        "url": "https://portalservicos.sefaz.ce.gov.br/",
        "utilidade": "media"
      },
      {
        "nome": "Serviços estaduais do Ceará no gov.br",
        "url": "https://www.gov.br/pt-br/servicos-estaduais?uf=CE",
        "utilidade": "alta"
      }
    ]
  },
  {
    "estado": "Rio Grande do Norte",
    "sigla": "RN",
    "fonte": "Portal do Cidadão RN e TCE-RN",
    "apis": [
      {
        "nome": "API de Dados Abertos do TCE-RN",
        "autenticacao": null,
        "url": "https://apidadosabertos.tce.rn.gov.br/",
        "utilidade": "baixa"
      }
    ],
    "portais_servicos": [
      {
        "nome": "Portal do Cidadão RN",
        "url": "https://www.cidadao.rn.gov.br/",
        "utilidade": "alta"
      }
    ]
  },
  {
    "estado": "Paraíba",
    "sigla": "PB",
    "fonte": "Paraíba Digital, Portal de Dados Abertos (CODATA/CGE) e gov.br",
    "apis": [
      {
        "nome": "Portal de Dados Abertos do Estado da Paraíba",
        "autenticacao": false,
        "url": "https://dados.pb.gov.br",
        "utilidade": "baixa"
      },
      {
        "nome": "Dados Abertos do TCE-PB (SAGRES)",
        "autenticacao": null,
        "url": "https://dados-abertos.tce.pb.gov.br/",
        "utilidade": "baixa"
      }
    ],
    "portais_servicos": [
      {
        "nome": "Paraíba Digital",
        "url": "https://paraibadigital.pb.gov.br/inicio",
        "utilidade": "alta"
      }
    ]
  },
  {
    "estado": "Pernambuco",
    "sigla": "PE",
    "fonte": "Portal pe.gov.br e TCE-PE",
    "apis": [
      {
        "nome": "API de Dados Abertos do TCE-PE",
        "autenticacao": null,
        "url": "https://sistemas.tcepe.tc.br/DadosAbertos/",
        "utilidade": "baixa"
      }
    ],
    "portais_servicos": [
      {
        "nome": "Carta de Serviços de Pernambuco",
        "url": "https://www.pe.gov.br/app/catalog/carta-de-servicos",
        "utilidade": "alta"
      }
    ]
  },
  {
    "estado": "Alagoas",
    "sigla": "AL",
    "fonte": "Portal Alagoas Digital / Guia de Serviços (SEPLAG-AL) e Portal Alagoas em Dados",
    "apis": [
      {
        "nome": "API de Serviços do Portal Alagoas Digital (JSON)",
        "autenticacao": false,
        "url": "https://alagoasdigital.al.gov.br/api/v1/services.json",
        "utilidade": "alta"
      },
      {
        "nome": "Portal Alagoas em Dados (catálogo de dados abertos)",
        "autenticacao": false,
        "url": "https://dados.al.gov.br/catalogo/",
        "utilidade": "media"
      }
    ],
    "portais_servicos": [
      {
        "nome": "Guia de Serviços de Alagoas",
        "url": "http://www.servicos.al.gov.br/",
        "utilidade": "alta",
        "observacao": "Antecessor do Alagoas Digital. Pode estar desatualizado."
      }
    ]
  },
  {
    "estado": "Sergipe",
    "sigla": "SE",
    "fonte": "Portal se.gov.br e catálogo de serviços estaduais do gov.br",
    "apis": [],
    "portais_servicos": [
      {
        "nome": "Serviços ao Cidadão - se.gov.br",
        "url": "https://www.se.gov.br/busca?publicosAlvo=CIDADAO",
        "utilidade": "alta"
      }
    ]
  },
  {
    "estado": "Bahia",
    "sigla": "BA",
    "fonte": "Portal de Serviços do Governo da Bahia",
    "apis": [
      {
        "nome": "API de Serviços do Governo da Bahia (JSON)",
        "autenticacao": false,
        "url": "https://servicos.ba.gov.br/api/servicos",
        "utilidade": "alta"
      },
      {
        "nome": "Documentação da API de integração ao Guia de Serviços (Bahia)",
        "autenticacao": false,
        "url": "https://servicos.ba.gov.br/servicos/dados/abertos",
        "utilidade": "alta"
      }
    ],
    "portais_servicos": [
      {
        "nome": "Todos os Serviços - Governo da Bahia",
        "url": "https://www.ba.gov.br",
        "utilidade": "alta"
      }
    ]
  },
  {
    "estado": "Acre",
    "sigla": "AC",
    "fonte": "Catálogo de APIs do Governo do Estado do Acre (SEAD)",
    "apis": [
      {
        "nome": "Consulta de Documentos SEI (por protocolo)",
        "autenticacao": null,
        "url": "https://api.sead.ac.gov.br/documentoSei/api/documentoSei/{documento}",
        "utilidade": "baixa"
      },
      {
        "nome": "Consulta de Processo por Usuário (SEI)",
        "autenticacao": null,
        "url": "https://api.sead.ac.gov.br/documentoSei/api/processso-por-usuario/{documento}",
        "utilidade": "baixa"
      },
      {
        "nome": "Consulta de Órgão por Unidade de Protocolo",
        "autenticacao": null,
        "url": "https://api.sead.ac.gov.br/documentoSei/api/orgaos-unidade-protocolo",
        "utilidade": "baixa"
      },
      {
        "nome": "Consulta de Assuntos Relacionados",
        "autenticacao": null,
        "url": "https://api.sead.ac.gov.br/documentoSei/api/assuntos-relacionados",
        "utilidade": "baixa"
      }
    ],
    "portais_servicos": [
      {
        "nome": "Portal de Serviços do Acre",
        "url": "https://www.ac.gov.br/",
        "utilidade": "alta"
      }
    ]
  },
  {
    "estado": "Amazonas",
    "sigla": "AM",
    "fonte": "Processamento de Dados do Amazonas (PRODAM) / Consórcio Amazônia Legal",
    "apis": [
      {
        "nome": "API de Integração SPROWEB (Homologação - Documentos e Usuários)",
        "autenticacao": null,
        "url": "https://prodam-api.homologacao.am.gov.br/documento/{documento}",
        "utilidade": "baixa"
      },
      {
        "nome": "Portal de Dados Abertos - Consórcio Amazônia Legal",
        "autenticacao": false,
        "url": "https://www.consorcioamazonialegal.gov.br/dados-abertos/api-dados-abertos-json",
        "utilidade": "media"
      }
    ],
    "portais_servicos": [
      {
        "nome": "Serviços do Governo do Amazonas",
        "url": "https://servicos.amazonas.am.gov.br",
        "utilidade": "alta"
      }
    ]
  },
  {
    "estado": "Pará",
    "sigla": "PA",
    "fonte": "Portal da Transparência de Santarém (PA)",
    "apis": [
      {
        "nome": "Consulta de Documentos Públicos e Gestão Fiscal",
        "autenticacao": false,
        "url": "https://transparencia.santarem.pa.gov.br/api/v1/portal/publicacoes/documentos/{documento}",
        "utilidade": "media"
      }
    ],
    "portais_servicos": [
      {
        "nome": "Portal de Serviços do Governo do Pará",
        "url": "https://www.pa.gov.br/servicos",
        "utilidade": "alta"
      }
    ]
  },
  {
    "estado": "Rondônia",
    "sigla": "RO",
    "fonte": "Controladoria Geral e SETIC do Estado de Rondônia",
    "apis": [
      {
        "nome": "API CKAN - Portal de Dados Abertos de Rondônia",
        "autenticacao": false,
        "url": "https://dados.ro.gov.br/api/3/action/package_list",
        "utilidade": "alta"
      },
      {
        "nome": "API Portal da Transparência de Rondônia",
        "autenticacao": null,
        "url": "https://transparencia.api.ro.gov.br/api/v1/",
        "utilidade": "media"
      }
    ],
    "portais_servicos": [
      {
        "nome": "Portal de Serviços de Rondônia",
        "url": "https://www.ro.gov.br/Servico",
        "utilidade": "alta"
      }
    ]
  },
  {
    "estado": "Roraima",
    "sigla": "RR",
    "fonte": "Controladoria-Geral do Estado de Roraima (CGE/RR)",
    "apis": [
      {
        "nome": "API Portal da Transparência de Roraima",
        "autenticacao": true,
        "url": "https://api.transparencia.rr.gov.br/",
        "utilidade": "media"
      },
      {
        "nome": "API Portal da Transparência de Roraima v2",
        "autenticacao": true,
        "url": "https://api2.transparencia.rr.gov.br/transparencia/redoc.html",
        "utilidade": "media"
      }
    ],
    "portais_servicos": [
      {
        "nome": "Carta de Serviços do Governo de Roraima",
        "url": "https://portal.rr.gov.br/servicos/",
        "utilidade": "alta"
      }
    ]
  },
  {
    "estado": "Tocantins",
    "sigla": "TO",
    "fonte": "Portal de Serviços e Transparência do Tocantins",
    "apis": [],
    "portais_servicos": [
      {
        "nome": "Portal de Serviços do Tocantins",
        "url": "https://servicos.to.gov.br/",
        "utilidade": "alta"
      }
    ]
  },
  {
    "estado": "Amapá",
    "sigla": "AP",
    "fonte": "Portal da Transparência do Amapá",
    "apis": [],
    "portais_servicos": [
      {
        "nome": "AP Digital — Serviços para o cidadão",
        "url": "https://apdigital.portal.ap.gov.br/todos-os-servicos?specific_public=cidad%C3%A3o&page=1",
        "utilidade": "alta"
      }
    ]
  },
  {
    "estado": "Espírito Santo",
    "sigla": "ES",
    "fonte": "Faça Fácil / PCIES",
    "apis": [
      {
        "nome": "API CKAN de dados abertos ES",
        "autenticacao": false,
        "url": "https://dados.es.gov.br/api/3/action/",
        "utilidade": "baixa"
      }
    ],
    "portais_servicos": [
      {
        "nome": "ES.GOV",
        "url": "https://portal.es.gov.br/",
        "utilidade": "alta"
      },
      {
        "nome": "PCIES",
        "url": "https://pci.es.gov.br/",
        "utilidade": "alta"
      },
      {
        "nome": "Detran-ES",
        "url": "https://detran.es.gov.br/",
        "utilidade": "alta"
      },
      {
        "nome": "Dados Abertos ES",
        "url": "https://dados.es.gov.br/dataset",
        "utilidade": "media"
      },
      {
        "nome": "Faça Fácil — CIN",
        "url": "https://facafacil.es.gov.br/servicos/cin-carteira-de-identidade-nacional-primeira-e-segunda-via",
        "utilidade": "alta"
      },
      {
        "nome": "PCIES — Perguntas frequentes",
        "url": "https://pci.es.gov.br/perguntas-frequentes?contato=3-carteira-de-identidade-nacional",
        "utilidade": "alta"
      },
      {
        "nome": "PCIES — CIN",
        "url": "https://pci.es.gov.br/cin",
        "utilidade": "alta"
      },
      {
        "nome": "Detran-ES — Perda ou dano",
        "url": "https://detran.es.gov.br/perda-ou-dano-2",
        "utilidade": "alta"
      },
      {
        "nome": "Detran-ES — Renovação",
        "url": "https://detran.es.gov.br/renovacao-de-cnh",
        "utilidade": "alta"
      }
    ]
  },
  {
    "estado": "Minas Gerais",
    "sigla": "MG",
    "fonte": "Governo de Minas Gerais",
    "apis": [
      {
        "nome": "API CKAN indicada pelo catálogo MG",
        "autenticacao": null,
        "url": "https://dados.mg.gov.br/api/3/action/",
        "utilidade": "media"
      }
    ],
    "portais_servicos": [
      {
        "nome": "Portal MG — Serviços",
        "url": "https://www.mg.gov.br/servicos",
        "utilidade": "alta"
      },
      {
        "nome": "Polícia Civil MG",
        "url": "https://www.policiacivil.mg.gov.br/",
        "utilidade": "media"
      },
      {
        "nome": "Detran-MG",
        "url": "https://detran.mg.gov.br/",
        "utilidade": "media"
      },
      {
        "nome": "Dados Abertos MG",
        "url": "https://dados.mg.gov.br/",
        "utilidade": "media"
      },
      {
        "nome": "Portal MG — Obter CIN",
        "url": "https://www.mg.gov.br/servico/obter-carteira-de-identidade-nacional",
        "utilidade": "alta"
      },
      {
        "nome": "Portal MG — Segunda via sem alterar dados",
        "url": "https://www.mg.gov.br/servico/solicitar-2a-da-cnh-ppd-ou-acc-sem-alterar-dados",
        "utilidade": "alta"
      },
      {
        "nome": "Portal MG — Renovar CNH A, AB, B ou ACC",
        "url": "https://www.mg.gov.br/servico/renovar-cnh-categorias-ab-ou-b-ou-acc",
        "utilidade": "alta"
      }
    ]
  },
  {
    "estado": "Rio de Janeiro",
    "sigla": "RJ",
    "fonte": "SETD",
    "apis": [
      {
        "nome": "API CKAN e snapshot de serviços RJ Digital",
        "autenticacao": false,
        "url": "https://dadosabertos.rj.gov.br/api/3/action/",
        "utilidade": "alta"
      }
    ],
    "portais_servicos": [
      {
        "nome": "Portal RJ Digital",
        "url": "https://www.rj.gov.br/",
        "utilidade": "alta"
      },
      {
        "nome": "Detran-RJ",
        "url": "https://www.detran.rj.gov.br/",
        "utilidade": "alta"
      },
      {
        "nome": "Dados Abertos RJ",
        "url": "https://dadosabertos.rj.gov.br/dataset/",
        "utilidade": "alta"
      },
      {
        "nome": "Serviços no Portal RJ Digital",
        "url": "https://dadosabertos.rj.gov.br/dataset/testedeintegracao1",
        "utilidade": "alta"
      },
      {
        "nome": "Detran-RJ — Primeira CIN",
        "url": "https://www.detran.rj.gov.br/todos-os-servicos/servicos-dic/1-via-de-identidade.html",
        "utilidade": "alta"
      },
      {
        "nome": "Detran-RJ — Agendamento digital desde 11/11/2026",
        "url": "https://www.detran.rj.gov.br/noticias/agendamentos-de-identificacao-civil-no-detran-rj-passam-a-ser-exclusivamente-digitais-a-partir-desta-quarta-feira-11-11.html",
        "utilidade": "alta"
      },
      {
        "nome": "Detran-RJ — Segunda via da habilitação",
        "url": "https://detran.rj.gov.br/todos-os-servicos/servicos-hab/2-via-de-habilitacao.html",
        "utilidade": "alta"
      },
      {
        "nome": "Detran-RJ — Renovação da habilitação",
        "url": "https://www.detran.rj.gov.br/todos-os-servicos/servicos-hab/renovacao-da-habilitacao.html",
        "utilidade": "alta"
      }
    ]
  },
  {
    "estado": "São Paulo",
    "sigla": "SP",
    "fonte": "Governo de São Paulo",
    "apis": [
      {
        "nome": "Catálogo de APIs Prodesp / Integrador",
        "autenticacao": null,
        "url": "https://rota.sp.gov.br/wps/portal/integrador/catalogoApis",
        "utilidade": "media"
      }
    ],
    "portais_servicos": [
      {
        "nome": "Serviços SP",
        "url": "https://servicos.sp.gov.br/",
        "utilidade": "alta"
      },
      {
        "nome": "Poupatempo — Carta CIN / IIRGD",
        "url": "https://www.poupatempo.sp.gov.br/carta/D97C3844-A2D9-4C9E-B364-CB4FEB26A1FB",
        "utilidade": "alta"
      },
      {
        "nome": "SSP-SP — Emissão CIN",
        "url": "https://www.portal.ssp.sp.gov.br/servicos/emissao-cin",
        "utilidade": "media"
      },
      {
        "nome": "Detran-SP",
        "url": "https://www.detran.sp.gov.br/detransp",
        "utilidade": "media"
      },
      {
        "nome": "Catálogo Prodesp",
        "url": "https://api.prodesp.sp.gov.br/",
        "utilidade": "media"
      },
      {
        "nome": "Poupatempo — Emitir segunda via da CNH",
        "url": "https://www.poupatempo.sp.gov.br/carta/D6BB72BC-80D9-4AC4-924C-7C8503F37367",
        "utilidade": "alta"
      },
      {
        "nome": "Serviços SP — Indisponibilidade",
        "url": "https://servicos.sp.gov.br/fcarta/D6BB72BC-80D9-4AC4-924C-7C8503F37367",
        "utilidade": "alta"
      },
      {
        "nome": "Serviços SP — Renovar CNH",
        "url": "https://servicos.sp.gov.br/fcarta/F8D2DBE7-66BE-4AEC-9B0F-25912922D566",
        "utilidade": "alta"
      }
    ]
  },
  {
    "estado": "Distrito Federal",
    "sigla": "DF",
    "fonte": "PCDF / Na Hora",
    "apis": [
      {
        "nome": "Referência pública à API CKAN do DF",
        "autenticacao": null,
        "url": "https://agenciabrasilia.df.gov.br/web/dados-abertos/faq",
        "utilidade": "media"
      }
    ],
    "portais_servicos": [
      {
        "nome": "Na Hora",
        "url": "https://www.nahora.df.gov.br/",
        "utilidade": "media"
      },
      {
        "nome": "Polícia Civil do DF",
        "url": "https://www.pcdf.df.gov.br/",
        "utilidade": "media"
      },
      {
        "nome": "Carta CIN — Na Hora",
        "url": "https://www.nahora.df.gov.br/policia_civil",
        "utilidade": "media"
      },
      {
        "nome": "Detran-DF",
        "url": "https://www.detran.df.gov.br/",
        "utilidade": "media"
      },
      {
        "nome": "Carta Detran — Na Hora",
        "url": "https://agenciabrasilia.df.gov.br/web/nahora/detran-3",
        "utilidade": "media"
      },
      {
        "nome": "Detran Digital",
        "url": "https://portal.detran.df.gov.br/",
        "utilidade": "media"
      },
      {
        "nome": "Dados Abertos DF",
        "url": "https://www.dados.df.gov.br/dataset",
        "utilidade": "media"
      }
    ]
  },
  {
    "estado": "Goiás",
    "sigla": "GO",
    "fonte": "Polícia Civil de Goiás",
    "apis": [],
    "portais_servicos": [
      {
        "nome": "Expresso",
        "url": "https://www.go.gov.br/servicos",
        "utilidade": "media"
      },
      {
        "nome": "Instituto de Identificação",
        "url": "https://goias.gov.br/policiacivil/instituto-de-identificacao/",
        "utilidade": "media"
      },
      {
        "nome": "CIN — Vapt Vupt",
        "url": "https://vaptvupt.go.gov.br/servico/solicitar-carteira-de-identidade-nacional--cin-ssp--secretaria-de-estado-da-seguranca-publica-6a610024b4e2b?removeLayout=1",
        "utilidade": "media"
      },
      {
        "nome": "Detran-GO",
        "url": "https://goias.gov.br/detran/",
        "utilidade": "media"
      },
      {
        "nome": "Segunda via — Vapt Vupt",
        "url": "https://vaptvupt.go.gov.br/servico/2-via-da-cnh-detran--departamento-estadual-de-transito-6a88577bbb334",
        "utilidade": "media"
      },
      {
        "nome": "Detran — taxas 2026",
        "url": "https://vaptvupt.go.gov.br/orgao/detran--departamento-estadual-de-transito",
        "utilidade": "media"
      },
      {
        "nome": "Dados Abertos Goiás",
        "url": "https://dadosabertos.go.gov.br/",
        "utilidade": "media"
      }
    ]
  },
  {
    "estado": "Mato Grosso",
    "sigla": "MT",
    "fonte": "Politec-MT",
    "apis": [
      {
        "nome": "API do catálogo de dados abertos MT",
        "autenticacao": false,
        "url": "https://dadosabertos.mt.gov.br/api/3",
        "utilidade": "media"
      }
    ],
    "portais_servicos": [
      {
        "nome": "Portal MT",
        "url": "https://portal.mt.gov.br/",
        "utilidade": "media"
      },
      {
        "nome": "Politec",
        "url": "https://www.politec.mt.gov.br/",
        "utilidade": "media"
      },
      {
        "nome": "Identificação Técnica",
        "url": "https://www.politec.mt.gov.br/identifica%C3%A7%C3%A3o-t%C3%A9cnica",
        "utilidade": "media"
      },
      {
        "nome": "Detran-MT",
        "url": "https://www.detran.mt.gov.br/",
        "utilidade": "media"
      },
      {
        "nome": "Segunda via de CNH",
        "url": "https://www.detran.mt.gov.br/web/DETRAN/servicos?c=9895454&e=10062270",
        "utilidade": "media"
      },
      {
        "nome": "Renovação de CNH",
        "url": "https://www.detran.mt.gov.br/servicos?c=9895454&e=10062261",
        "utilidade": "media"
      },
      {
        "nome": "Portal de serviços digitais",
        "url": "https://portal-servicos.detran.mt.gov.br/",
        "utilidade": "media"
      },
      {
        "nome": "Dados Abertos MT",
        "url": "https://dadosabertos.mt.gov.br/dataset/",
        "utilidade": "media"
      }
    ]
  },
  {
    "estado": "Mato Grosso do Sul",
    "sigla": "MS",
    "fonte": "Detran-MS",
    "apis": [
      {
        "nome": "API do catálogo de dados abertos MS",
        "autenticacao": false,
        "url": "https://www.dados.ms.gov.br/api/3",
        "utilidade": "media"
      }
    ],
    "portais_servicos": [
      {
        "nome": "Portal Único MS",
        "url": "https://www.ms.gov.br/",
        "utilidade": "media"
      },
      {
        "nome": "Polícia Científica",
        "url": "https://www.cgp.sejusp.ms.gov.br/",
        "utilidade": "media"
      },
      {
        "nome": "Agendamento Sejusp",
        "url": "https://servicos.sejusp.ms.gov.br/",
        "utilidade": "media"
      },
      {
        "nome": "Detran-MS",
        "url": "https://www.detran.ms.gov.br/",
        "utilidade": "media"
      },
      {
        "nome": "Segunda via da CNH",
        "url": "https://www.detran.ms.gov.br/servicos-em-destaque/solicitar-segunda-via-da-carteira-nacional-de-habilitacao-cnh-ou-permissao-para-dirigir-ppd/",
        "utilidade": "media"
      },
      {
        "nome": "Renovação da CNH",
        "url": "https://www.detran.ms.gov.br/servicos-em-destaque/pedir-renovacao-da-carteira-nacional-de-habilitacao-cnh/",
        "utilidade": "media"
      },
      {
        "nome": "Meu Detran — Habilitação",
        "url": "https://www2.meudetran.ms.gov.br/habilitacao.php",
        "utilidade": "media"
      },
      {
        "nome": "Dados Abertos MS",
        "url": "https://www.dados.ms.gov.br/dataset/",
        "utilidade": "media"
      }
    ]
  }
];

const fontesIntegracao = [
  {
    "id": "br-api-servico-individual",
    "nome": "Consulta de Serviços Públicos — serviço por ID",
    "orgao": "MGI/Secretaria de Governo Digital",
    "abrangencia": "nacional",
    "tipo": "api_servicos",
    "url_oficial": "https://www.gov.br/conecta/catalogo/apis/api-de-servicos",
    "url_documentacao": "https://servicos.gov.br/api/v1/docs",
    "url_base": "https://www.servicos.gov.br/api/v1",
    "informacoes": [
      "Nomes e sinônimos",
      "Descrição e público",
      "Etapas, documentos, custos e canais por etapa, quando preenchidos",
      "Órgão e endereço do serviço"
    ],
    "autenticacao": {
      "necessaria": false,
      "escopo": "GET /api/v1/servicos/{servicoId}, para serviço publicado",
      "evidencia": "Catálogo oficial dispensa credencial para consulta individual. Swagger não exige cabeçalho de autenticação nesta rota. GET do ID 10152 retornou HTTP 200 JSON.",
      "fonte": "https://servicos.gov.br/api/v1/docs"
    },
    "verificacao": {
      "data": "2026-11-15",
      "metodo": "leitura documental e GET público sem credenciais",
      "resultado": "verificado no escopo descrito",
      "testes": [
        {
          "url": "https://www.servicos.gov.br/api/v1/servicos/10152",
          "metodo": "GET",
          "status_http": 200,
          "formato": "json",
          "content_type": "application/json;charset=UTF-8",
          "url_final": "https://www.servicos.gov.br/api/v1/servicos/10152",
          "evidencia": "Objeto resposta do serviço Aditar contrato do FIES, com nome, descricao, nomesPopulares, solicitantes, orgao e etapas; cada etapa contém documentos, custos e canaisDePrestacao.",
          "limites": [
            "Teste limitado ao endereço e momento registrados; não comprova todos os recursos, licença de reutilização, disponibilidade futura ou funcionamento pelo navegador/CORS.",
            "Não foram feitos login, escrita, agendamento ou envio de dados pessoais.",
            "O ID 10152 veio do exemplo do guia oficial de descoberta de IDs; não foi adivinhado. Conteúdo retornado é exemplo técnico e não foi usado como regra do novo Fies.",
            "Alguns campos estavam vazios e havia texto com problema de codificação: normalizar e revisar antes de exibir.",
            "Não é autorização para um projeto acadêmico publicar serviços em nome de um governo. Operações não testadas.",
            "Não fornece requisitos, documentos nem passos dos serviços."
          ],
          "data": "2026-11-15"
        }
      ]
    },
    "utilidade": "alta",
    "limitacoes": [
      "Teste limitado ao endereço e momento registrados; não comprova todos os recursos, licença de reutilização, disponibilidade futura ou funcionamento pelo navegador/CORS.",
      "Não foram feitos login, escrita, agendamento ou envio de dados pessoais.",
      "O ID 10152 veio do exemplo do guia oficial de descoberta de IDs; não foi adivinhado. Conteúdo retornado é exemplo técnico e não foi usado como regra do novo Fies.",
      "Alguns campos estavam vazios e havia texto com problema de codificação: normalizar e revisar antes de exibir.",
      "Não é autorização para um projeto acadêmico publicar serviços em nome de um governo. Operações não testadas.",
      "Não fornece requisitos, documentos nem passos dos serviços."
    ],
    "fontes_adicionais": [
      "https://www.gov.br/pt-br/guia-de-edicao-de-servicos-do-gov.br/como-cadastrar-e-alterar-servicos/procedimentos-administradores/como-descobrir-o-id-de-um-servico",
      "https://servicos.gov.br/editar/swagger2/swagger.json"
    ]
  },
  {
    "id": "br-api-lista-servicos",
    "nome": "Consulta de Serviços Públicos — lista completa",
    "orgao": "MGI/Secretaria de Governo Digital",
    "abrangencia": "nacional",
    "tipo": "api_servicos",
    "url_oficial": "https://www.gov.br/conecta/catalogo/apis/api-de-servicos",
    "url_documentacao": "https://servicos.gov.br/api/v1/docs",
    "url_base": "https://www.servicos.gov.br/api/v1",
    "informacoes": [
      "Lista de serviços publicados"
    ],
    "autenticacao": {
      "necessaria": true,
      "escopo": "GET /api/v1/servicos-auth",
      "evidencia": "Documentação exige Authorization; consulta sem credencial retornou HTTP 401 JSON com erro de autenticação.",
      "fonte": "https://servicos.gov.br/api/v1/docs"
    },
    "verificacao": {
      "data": "2026-11-15",
      "metodo": "leitura documental e GET público sem credenciais",
      "resultado": "verificado no escopo descrito",
      "testes": [
        {
          "url": "https://www.servicos.gov.br/api/v1/servicos-auth",
          "metodo": "GET",
          "status_http": 401,
          "formato": "json",
          "content_type": "application/json;charset=UTF-8",
          "url_final": "https://www.servicos.gov.br/api/v1/servicos-auth",
          "evidencia": "{\"resposta\":null,\"mensagem\":\"Erro na autenticação. Token inválido.\",\"hasErro\":true}",
          "limites": [
            "Teste limitado ao endereço e momento registrados; não comprova todos os recursos, licença de reutilização, disponibilidade futura ou funcionamento pelo navegador/CORS.",
            "Não foram feitos login, escrita, agendamento ou envio de dados pessoais.",
            "O ID 10152 veio do exemplo do guia oficial de descoberta de IDs; não foi adivinhado. Conteúdo retornado é exemplo técnico e não foi usado como regra do novo Fies.",
            "Alguns campos estavam vazios e havia texto com problema de codificação: normalizar e revisar antes de exibir.",
            "Não é autorização para um projeto acadêmico publicar serviços em nome de um governo. Operações não testadas.",
            "Não fornece requisitos, documentos nem passos dos serviços."
          ],
          "data": "2026-11-15"
        }
      ]
    },
    "utilidade": "alta, condicionada a credenciais",
    "limitacoes": [
      "Teste limitado ao endereço e momento registrados; não comprova todos os recursos, licença de reutilização, disponibilidade futura ou funcionamento pelo navegador/CORS.",
      "Não foram feitos login, escrita, agendamento ou envio de dados pessoais.",
      "O ID 10152 veio do exemplo do guia oficial de descoberta de IDs; não foi adivinhado. Conteúdo retornado é exemplo técnico e não foi usado como regra do novo Fies.",
      "Alguns campos estavam vazios e havia texto com problema de codificação: normalizar e revisar antes de exibir.",
      "Não é autorização para um projeto acadêmico publicar serviços em nome de um governo. Operações não testadas.",
      "Não fornece requisitos, documentos nem passos dos serviços."
    ]
  },
  {
    "id": "br-api-manutencao-estaduais",
    "nome": "Integração dos Serviços Estaduais no gov.br",
    "orgao": "MGI/Secretaria de Governo Digital",
    "abrangencia": "nacional",
    "tipo": "documentacao_api",
    "url_oficial": "https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/atendimento-gov.br/integracao-dos-servicos-estaduais/integracao-dos-servicos-estaduais",
    "url_documentacao": "https://servicos.gov.br/api/v1/docs",
    "url_base": null,
    "informacoes": [
      "Publicação e manutenção de serviços estaduais por gestores"
    ],
    "autenticacao": {
      "necessaria": true,
      "escopo": "Operações de manutenção dos serviços estaduais",
      "evidencia": "Orientação oficial exige solicitação de credenciais pelo gestor responsável.",
      "fonte": "https://servicos.gov.br/api/v1/docs"
    },
    "verificacao": {
      "data": "2026-11-15",
      "metodo": "leitura documental",
      "resultado": "verificado no escopo descrito",
      "testes": []
    },
    "utilidade": "baixa como integração direta do projeto; útil para entender a origem do catálogo",
    "limitacoes": [
      "Teste limitado ao endereço e momento registrados; não comprova todos os recursos, licença de reutilização, disponibilidade futura ou funcionamento pelo navegador/CORS.",
      "Não foram feitos login, escrita, agendamento ou envio de dados pessoais.",
      "O ID 10152 veio do exemplo do guia oficial de descoberta de IDs; não foi adivinhado. Conteúdo retornado é exemplo técnico e não foi usado como regra do novo Fies.",
      "Alguns campos estavam vazios e havia texto com problema de codificação: normalizar e revisar antes de exibir.",
      "Não é autorização para um projeto acadêmico publicar serviços em nome de um governo. Operações não testadas.",
      "Não fornece requisitos, documentos nem passos dos serviços."
    ]
  },
  {
    "id": "br-ibge-localidades",
    "nome": "API de Localidades",
    "orgao": "IBGE",
    "abrangencia": "nacional",
    "tipo": "api_dados_abertos",
    "url_oficial": "https://servicodados.ibge.gov.br/api/docs/localidades",
    "url_documentacao": "https://servicodados.ibge.gov.br/api/docs/localidades",
    "url_base": "https://servicodados.ibge.gov.br/api/v1/localidades",
    "informacoes": [
      "Códigos, siglas e nomes de UFs e regiões; documentação também contempla municípios"
    ],
    "autenticacao": {
      "necessaria": false,
      "escopo": "Consulta GET de UFs testada",
      "evidencia": "GET documentado retornou HTTP 200 JSON sem credencial.",
      "fonte": "https://servicodados.ibge.gov.br/api/docs/localidades"
    },
    "verificacao": {
      "data": "2026-11-15",
      "metodo": "leitura documental e GET público sem credenciais",
      "resultado": "verificado no escopo descrito",
      "testes": [
        {
          "url": "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
          "metodo": "GET",
          "status_http": 200,
          "formato": "json",
          "content_type": "application/json; charset=utf-8",
          "url_final": "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
          "evidencia": "[{\"id\":11,\"sigla\":\"RO\",\"nome\":\"Rondônia\",\"regiao\":{\"id\":1,\"sigla\":\"N\",\"nome\":\"Norte\"}},{\"id\":12,\"sigla\":\"AC\",\"nome\":\"Acre\",\"regiao\":{\"id\":1,\"sigla\":\"N\",\"nome\":\"Norte\"}},{\"id\":13,\"sigla\":\"AM\",\"nome\":\"Amazonas\",\"regiao\":{\"id\":1,\"sigla\":\"N\",\"nome\":\"Norte\"}},{\"id\":14,\"sigla\":\"RR\",\"nome\":\"Roraima\",\"regiao\":{\"id\":1,\"sigla\":\"N\",\"nome\":\"Norte\"}},{\"id\":15,\"",
          "limites": [
            "Teste limitado ao endereço e momento registrados; não comprova todos os recursos, licença de reutilização, disponibilidade futura ou funcionamento pelo navegador/CORS.",
            "Não foram feitos login, escrita, agendamento ou envio de dados pessoais.",
            "O ID 10152 veio do exemplo do guia oficial de descoberta de IDs; não foi adivinhado. Conteúdo retornado é exemplo técnico e não foi usado como regra do novo Fies.",
            "Alguns campos estavam vazios e havia texto com problema de codificação: normalizar e revisar antes de exibir.",
            "Não é autorização para um projeto acadêmico publicar serviços em nome de um governo. Operações não testadas.",
            "Não fornece requisitos, documentos nem passos dos serviços."
          ],
          "data": "2026-11-15"
        }
      ]
    },
    "utilidade": "media: filtros de localidade",
    "limitacoes": [
      "Teste limitado ao endereço e momento registrados; não comprova todos os recursos, licença de reutilização, disponibilidade futura ou funcionamento pelo navegador/CORS.",
      "Não foram feitos login, escrita, agendamento ou envio de dados pessoais.",
      "O ID 10152 veio do exemplo do guia oficial de descoberta de IDs; não foi adivinhado. Conteúdo retornado é exemplo técnico e não foi usado como regra do novo Fies.",
      "Alguns campos estavam vazios e havia texto com problema de codificação: normalizar e revisar antes de exibir.",
      "Não é autorização para um projeto acadêmico publicar serviços em nome de um governo. Operações não testadas.",
      "Não fornece requisitos, documentos nem passos dos serviços."
    ]
  }
];

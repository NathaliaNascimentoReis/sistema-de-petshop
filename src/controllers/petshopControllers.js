import * as petshopModel from "../models/petshopModel.js";

export const listarTodosPets = async (req, res) => {
  try {
    const pets = await petshopModel.findAllPets();
    if (!pets || pets.length === 0) {
      res.status(404).json({
        total: pets.length,
        message: "Nenhum pet encontrado",
        pets,
      });
    }

    res.status(200).json({
      total: pets.length,
      message: "Pets encontrados com sucesso",
      pets,
    });
  } catch (error) {
    res.status(500).json({
      erro: "Erro interno do servidor",
      detalhes: error.message,
      status: 500,
    });
  }
};

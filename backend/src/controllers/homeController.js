const ctrl = {};
ctrl.wellcome = (req, res) => {
  res.json({
    message: "Hola frontend desde el server de express",
  });
};
export default ctrl;

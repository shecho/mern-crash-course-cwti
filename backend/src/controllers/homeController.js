const ctrl = {};
ctrl.wellcome = (req, res) => {
  res.json({
    message: "hola frontend desde el server de express",
  });
};
export default ctrl;

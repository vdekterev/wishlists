const errorHandler = (err, req, res) => {
  console.trace(err);
  // express-validator
  if (Array.isArray(err) && err[0]?.msg) {
    return res.status(400).json({
      success: false,
      errors: err.map(e => ({
        type: 'validation',
        field: e.param,
        message: e.msg,
      })),
    });
  }
  // Кастомные ошибки
  if (err instanceof Error && 'status' in err) {
    return res.status(err.status || 500).json({
      success: false,
      errors: [
        {
          type: err.type || 'general',
          message: err.message,
        },
      ],
    });
  }

  // Дефолт
  return res.status(500).json({
    success: false,
    errors: [
      {
        type: 'internal',
        message: 'Внутренняя ошибка приложения',
      },
    ],
  });
};

module.exports = errorHandler;

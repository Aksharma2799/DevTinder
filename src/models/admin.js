const adminSchema = new mongoose.Schema(
  {
    emailId: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: " Invalid email address",
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
  },
  {
    timestamps: true,
  },
);

module;
exports = mongoose.model("Admin", adminSchema);

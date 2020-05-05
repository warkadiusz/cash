class ControlStructures {
  constructor(stack) {
    this.stack = stack;
  }

  visitIfStatement(ctx, visitor) {
    const conditions = [];
    const bodies = [];
    conditions.push(ctx.condition);
    conditions.push(...ctx.elseif_cond);
    bodies.push(ctx.body);
    bodies.push(...ctx.elseif_body);

    for (const k in conditions) {
      let evaluateTo = visitor.visit(conditions[k]);
      if (evaluateTo) {
        return visitor.visit(bodies[k]);
      }
    }

    if (ctx.else_body) {
      visitor.visit(ctx.else_body)
    }
  }

  visitWhileStatement(ctx, visitor) {
    const body = ctx.body;
    const condition = ctx.condition;

    while (visitor.visit(condition)) {
      visitor.visit(body);
    }
  }
}

module.exports = ControlStructures;

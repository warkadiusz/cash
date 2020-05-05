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

    for(const k in conditions) {
      let evaluateTo = visitor.visit(conditions[k]);
      if(evaluateTo) {
        return visitor.visit(bodies[k]);
      }
    }

    if(ctx.else_body) {
      visitor.visit(ctx.else_body)
    }
  }
}

module.exports = ControlStructures;

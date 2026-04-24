# IA_HISTORY.md — Registro de Uso de IA

**Alumno/a:** <!-- LEDESMA KAREN -->
**Fecha:** <!-- 23/04/2026 -->

---


> **Ejemplo de análisis aceptable** ✅
> _"La IA reemplazó los `<div>` por etiquetas semánticas, pero usó `<section>` para la navegación en lugar de `<nav>`. Lo detecté al revisar la estructura en DevTools. Técnicamente es incorrecto porque `<nav>` tiene un rol ARIA implícito que `<section>` no tiene, así que lo corregí manualmente."_

---

## Prompt 1

### Momento del proceso

```
<!--
  Casi al final de la corrección del HTML, cuando ya lo tenía casi completo pero quería verificar detalles de semántica y accesibilidad.
-->
```

### Lo que le pedí a la IA

```
<!-- Revisa este archivo HTML y decime qué etiquetas semánticas podría usar en lugar de div, y si hay problemas de accesibilidad.. -->
```

### Análisis del resultado obtenido

```
<!--
  La IA sugirió reemplazar varios div por etiquetas como header, section, article y footer; lo cual estoy de acuerdo porque existiendo etiquetas que cumplen con la funcionalidad de la misma no tiene sentido usar tantos div. También marcó problemas de accesibilidad como imágenes sin alt que habia olvidado. En general fue útil como revisión final más que como punto de partida, ya que la mayor parte del HTML estaba correcto.
-->
```

### Qué debí corregir manualmente y por qué

```
<!--
  El resultado era correcto porque mi intención fue mas repasar y verificar si lo realizado estaba bien, al ser una documentacion partida (osea al tener contenido de css dentro de las lineas propias de html) tenia inseguridad respecto al haber olvidado algo, o incluso poder mejorarlo.
-->
```

---

## Prompt 2

### Momento del proceso

```
<!--
  Cuando estaba revisando el CSS y quería asegurarme de que coincidiera bien con el HTML y que la estructura semántica fuera correcta.
-->
```

### Lo que le pedí a la IA

```
<!-- Revisá si mi CSS coincide con mi HTML y si hay algo mal en la estructura o en el uso de clases y etiquetas -->
```

### Análisis del resultado obtenido

```
<!--
  Tuve que corregir algunos errores de cierre de etiquetas que estaban rompiendo la estructura del HTML. También ajusté algunas clases para que coincidan exactamente con el CSS. Además, revisé manualmente que el uso de etiquetas semánticas fuera coherente, ya que no todo lo que sugería la IA aplicaba directamente.
-->
```

### Qué debí corregir manualmente y por qué

```
<!--
  Por ejemplo, en algunos casos sugería usar <article> para bloques que no eran contenido independiente, como simples contenedores de texto, y decidí mantenerlos como parte de una <section> en lugar de separarlos innecesariamente.
-->
```

---

## Reflexión final

```
<!--
  La IA tendió a proponer cambios de más, sobre todo en CSS, agregando estilos o estructuras que no eran necesarios para la consigna. También en HTML a veces sugería etiquetas semánticas que no encajaban del todo con el contenido, por lo que tuve que revisarlas y ajustarlas. Sin embargo, resolvió bien cosas puntuales como la relación entre HTML y CSS y la detección de errores básicos. La próxima vez sería más específica en lo que le pido, aclarando mejor los límites del ejercicio para evitar tener que descartar partes de la respuesta.
-->
```





        // Ejemplo — resumen de ventas por vendedor
        const reporteVentas = [
        { vendedor: "Carlos",  monto: 3200, region: "Norte" },
        { vendedor: "María",   monto: 4750, region: "Sur"   },
        { vendedor: "Luis",    monto: 2100, region: "Norte" },
        { vendedor: "Sofía",   monto: 5300, region: "Sur"   },
        { vendedor: "Roberto", monto: 1800, region: "Este"  },
        ];

        const META_INDIVIDUAL  = 3000;
        let totalGeneral       = 0;
        let vendedoresEnMeta   = 0;

        console.log("=== Resumen de ventas ===");

        for (const venta of reporteVentas) {
        totalGeneral += venta.monto;

        const cumpleMeta = venta.monto >= META_INDIVIDUAL;
        if (cumpleMeta) {
            vendedoresEnMeta++;
        }

        const indicador = cumpleMeta ? "✅" : "⚠️";
        console.log(
            `${indicador} ${venta.vendedor.padEnd(8)} ` +
            `[${venta.region.padEnd(5)}]  ` +
            `$${venta.monto.toLocaleString()}`
        );
        }

        console.log("─".repeat(38));
        console.log(`Total general:    $${totalGeneral.toLocaleString()}`);
        console.log(`En meta (≥$${META_INDIVIDUAL}): ${vendedoresEnMeta}/${reporteVentas.length} vendedores`);
        // ✅ Carlos   [Norte]  $3,200
        // ✅ María    [Sur  ]  $4,750
        // ⚠️ Luis     [Norte]  $2,100
        // ✅ Sofía    [Sur  ]  $5,300
        // ⚠️ Roberto  [Este ]  $1,800
        // ──────────────────────────────────────
        // Total general:    $17,150
        // En meta (≥$3000): 3/5 vendedores






    // Ejemplo — análisis de texto: contar vocales y consonantes
    const texto      = "JavaScript es increíble";
    const VOCALES    = new Set(["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"]);
    let conteoVocales    = 0;
    let conteoConsonantes = 0;
    let conteoEspacios    = 0;

    for (const caracter of texto.toLowerCase()) {
    if (caracter === " ") {
        conteoEspacios++;
    } else if (VOCALES.has(caracter)) {
        conteoVocales++;
    } else if (caracter >= "a" && caracter <= "z") {
        conteoConsonantes++;
    }
    }

    console.log(`Texto: "${texto}"`);
    console.log(`Vocales:     ${conteoVocales}`);
    console.log(`Consonantes: ${conteoConsonantes}`);
    console.log(`Espacios:    ${conteoEspacios}`);
    console.log(`Total letras:${conteoVocales + conteoConsonantes}`);
    // Texto: "JavaScript es increíble"
    // Vocales:     8
    // Consonantes: 12
    // Espacios:    2
    // Total letras: 20
export function createSeats(rangoFilas, rangoColumnas) {
    // Inicializa el HTML de la tabla
    let html = '<table>';

    // Añade la cabecera de la tabla
    html += '<tr><th></th>';
    for (let i = rangoColumnas[0]; i <= rangoColumnas[1]; i++) {
        html += `<th>${i}</th>`;
    }
    html += '</tr>';

    // Bucle a través del rango de filas
    rangoFilas.forEach(fila => {
        html += `<tr><th>${fila}</th>`;

        // Bucle a través del rango de columnas
        for (let i = rangoColumnas[0]; i <= rangoColumnas[1]; i++) {
            // Aquí se puede añadir lógica para determinar el color del asiento
            let colorAsiento = determinarColorAsiento(fila, i);

            // Añade el asiento a la tabla
            html += `<td onclick="window.reservationManager.seatSaver.addSeat('${fila}${i}')">` +
                `<svg class="si-glyph-chair-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 17 17">` +
                `<g stroke="none" stroke-width="1" fill-rule="evenodd">` +
                `<g transform="translate(4.000000, 0.000000)" fill="${colorAsiento}" id="${fila}${i}">` +
                `<path d="M7.377,7.984 L2.641,7.984 L2.049,1.343 C2.049,1.343 1.704,-0.001 5.008,-0.001 C8.314,-0.001 7.968,1.343 7.968,1.343 L7.377,7.984 Z"></path>` +
                `<path d="M8.953,16 L8.1,16 L7.074,13.016 L8.953,13.016 L8.953,16 Z"></path>` +
                `<path d="M1.898,16 L1.002,16 L1.002,13.016 L2.975,13.016 L1.898,16 Z"></path>` +
                `<path  d="M8.976,11.222 C8.976,11.637 8.724,11.972 8.413,11.972 L1.59,11.972 C1.279,11.972 1.028,11.637 1.028,11.222 C1.028,11.222 1.457,9.036 2.162,9.036 L7.844,9.036 C8.643,9.036 8.976,11.222 8.976,11.222 Z"></path>` +
                `<path d="M9.872,8.355 C9.872,8.704 9.682,8.986 9.451,8.986 L9.451,8.986 C9.219,8.986 9.031,8.704 9.031,8.355 L9.031,5.672 C9.031,5.323 9.219,5.041 9.451,5.041 L9.451,5.041 C9.681,5.041 9.872,5.323 9.872,5.672 L9.872,8.355 Z"></path>` +
                `<path d="M0.947,8.355 C0.947,8.704 0.738,8.986 0.482,8.986 L0.482,8.986 C0.224,8.986 0.016,8.704 0.016,8.355 L0.016,5.672 C0.016,5.323 0.224,5.041 0.482,5.041 L0.482,5.041 C0.738,5.041 0.947,5.323 0.947,5.672 L0.947,8.355 Z"></path>` +
                `</g></g></svg></td>`;
        }

        html += '</tr>';
    });

    html += '</table>';

    // Coloca la tabla en el elemento deseado del DOM
    document.querySelector('#seats-table').innerHTML = html;
}

function determinarColorAsiento(fila, columna) {
    // Implementar lógica para determinar el color del asiento
    // Esta es una función de ejemplo que siempre devuelve "gray"
    // Se puede modificar para utilizar datos reales, por ejemplo, estado del asiento
    return "gray";
}



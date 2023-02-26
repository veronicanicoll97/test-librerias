DECLARE
	nombre_producto d_productos.desc_producto%TYPE;
	cant_mas_comp d_compras_x_anio.cantidad%TYPE;
	cant_mas_vend d_ventas_x_anio.cantidad%TYPE;
BEGIN
	FOR current_row IN (
		SELECT ca.anio FROM d_compras_x_anio ca
		UNION
		SELECT va.anio FROM d_ventas_x_anio va
	) LOOP
		dbms_output.put_line(CONCAT('Año: ', current_row.anio));

		BEGIN
			SELECT p.desc_producto, max_compra.valor
			INTO nombre_producto, cant_mas_comp
			FROM (SELECT MAX(cantidad) valor FROM d_compras_x_anio) max_compra,
				d_compras_x_anio ca
			INNER JOIN d_productos p
				ON p.id_producto = ca.id_producto
			WHERE ca.anio = current_row.anio AND
				ca.cantidad = max_compra.valor AND
				ROWNUM <= 1;

			dbms_output.put_line(
				'Más comprado: ' || nombre_producto || ' : ' || cant_mas_comp);

			EXCEPTION
				WHEN NO_DATA_FOUND THEN
					dbms_output.put_line('No hubo compras en el año: ' || CONCAT('Año: ', current_row.anio));
		END;

		BEGIN
			SELECT p.desc_producto, max_venta.valor
			INTO nombre_producto, cant_mas_vend
			FROM (SELECT MAX(cantidad) valor FROM d_ventas_x_anio) max_venta,
				d_ventas_x_anio va
			INNER JOIN d_productos p
				ON p.id_producto = va.id_producto
			WHERE va.anio = current_row.anio AND
				va.cantidad = max_venta.valor AND
				ROWNUM <= 1;

			dbms_output.put_line(
				'Más vendido: ' || nombre_producto || ' : ' || cant_mas_vend);

			EXCEPTION
				WHEN NO_DATA_FOUND THEN
					dbms_output.put_line('No hubo ventas en el año: ' || CONCAT('Año: ', current_row.anio));
		END;
	END LOOP;
END;
/
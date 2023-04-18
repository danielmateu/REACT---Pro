import './myLabel.css'


export interface MyLabelProps {
    /**
   * Este es el mensaje a mostrar en la etiqueta
   */
    label: string;
    /**
   * Este es el tamaño de la etiqueta
   */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
   * Si quiere todo capitalizado
   */
    allCaps?: boolean;
    /**
   * What background color to use
   */
    backgroundColor?: string;
    /**
     * What color to use
     * @default 'text-primary'
     * @type 'primary' | 'secondary' | 'tertiary'
    */
    // color?: 'primary' | 'secondary' | 'tertiary';
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
       * Color personalizado de la fuente
    */
    fontColor?: string;
}

export const MyLabel = ({
    allCaps = false,
    backgroundColor = '',
    color = 'primary',
    label = 'No Label',
    size = 'normal',
    fontColor = '#1f1f1f'
}: MyLabelProps) => {
    return (
        <span
            style={{ backgroundColor, color: fontColor }}
            className={`label ${size} text-${color}`}
        >
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}

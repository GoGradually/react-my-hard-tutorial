type StackProps = {
    direction?: 'row' | 'column',
    gap?: number;
    align?: 'flex-start' | 'center' | 'flex-end';
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
    children: React.ReactNode;
}

function Stack({
                      direction = 'column',
                      gap = 10,
                      align = 'flex-start',
                      justify = 'flex-start',
                      children
                  }: StackProps) {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: direction,
                gap: gap,
                alignItems: align,
                justifyContent: justify,
            }}>
                {children}
            </div>
        </>
    )
}

export default Stack;
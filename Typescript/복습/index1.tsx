<div className="border-2 p-4 rounded-lg absolute z-0 bg-white">
  {keypadData?.keypad.svgGrid.map((rows, j) => {
    return (
      <div key={j} className="grid-cols-5 grid gap-4 my-4">
        {rows.map((cols, i) => {
          return (
            <div key={i}>
              <Button
                variant="secondary"
                className="w-20 h-20"
                dangerouslySetInnerHTML={{ __html: cols }}
              />
            </div>
          );
        })}
        {j === 0 ? (
          <Button className="w-20 h-20">지우기</Button>
        ) : j === 1 ? (
          <Button className="w-20 h-20">딜뤼트</Button>
        ) : (
          <Button
            className="w-20 h-20"
            onClick={() => {
              setIsOpen(0);
            }}
          >
            몰루
          </Button>
        )}
      </div>
    );
  })}
</div>;

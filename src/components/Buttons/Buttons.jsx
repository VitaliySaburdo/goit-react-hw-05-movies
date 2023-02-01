import { BtnPrv, BtnNxt } from './Buttons.styled';

export const Buttons = ({nextPage, previousPage, page, totalPages}) => {
  return (
    <div>
      <BtnPrv
        disabled={page === 1}
        onClick={() => previousPage()}
        type="button"
      >
        Previous page
      </BtnPrv>

      <BtnNxt
        disabled={page === totalPages}
        onClick={() => nextPage()}
        type="button"
      >
        Next page
      </BtnNxt>
    </div>
  );
};

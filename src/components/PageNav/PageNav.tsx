import Button from "../Button/Button";

export default function PageNav({ active, onPageChange }) {
    return (
      <section>
        <div className="container">
            <div className="flex">
                <Button className={"flex-1"} isActive={active==='main'} onClick={() => onPageChange('main')}>
                    Main page
                </Button>
                <Button className={"flex-1"} isActive={active==="second"} onClick={() => onPageChange('second')}>
                    Feedback
                </Button>
                <Button className={"flex-1"} isActive={active==="ref"} onClick={() => onPageChange('ref')}>
                    Check Ref
                </Button>

            </div>

        </div>
      </section>
      )
  }
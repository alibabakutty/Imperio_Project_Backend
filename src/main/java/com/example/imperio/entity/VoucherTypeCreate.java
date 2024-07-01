package com.example.imperio.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "voucher_type_create")
public class VoucherTypeCreate {


    @Column(name = "voucher_type_name")
    private String voucherTypeName;

    @Id
    @Column(name = "voucher_type")
    private String voucherType;

    @Column(name = "method_of_voucher_numbering")
    private String methodOfVoucherNumbering;

    @Column(name = "alter_additional_numbering_details")
    private String alterAdditionalNumberingDetails;

    @Column(name = "starting_number")
    private String startingNumber;

    @Column(name = "width_of_numerical_part")
    private String widthOfNumericalPart;

    @Column(name = "prefill_with_zero")
    private String prefillWithZero;

    @Column(name = "restart_numbering_application_form")
    private String restartNumberingApplicationForm;

    @Column(name = "restart_numbering_starting_number")
    private String restartNumberingStartingNumber;

    @Column(name = "restart_numbering_periodicity")
    private String restartNumberingPeriodicity;

    @Column(name = "prefix_details_application_form")
    private String prefixDetailsApplicationForm;

    @Column(name = "prefix_details_particulars")
    private String prefixDetailsParticulars;

    @Column(name = "suffix_details_application_form")
    private String suffixDetailsApplicationForm;

    @Column(name = "suffix_details_particulars")
    private String suffixDetailsParticulars;

    @Column(name = "printing_voucher_after_saving")
    private String printingVoucherAfterSaving;

    @Column(name = "name_of_class")
    private String nameOfClass;

}
